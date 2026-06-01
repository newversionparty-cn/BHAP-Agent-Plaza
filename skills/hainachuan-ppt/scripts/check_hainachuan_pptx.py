#!/usr/bin/env python3
"""Validate core Hainachuan PPTX constraints.

Checks ZIP integrity, slide count, editable font declarations, and banned terms.
This is intentionally package-level QA; still inspect the rendered deck in WPS.
"""

from __future__ import annotations

import argparse
import re
import sys
import zipfile
from collections import Counter
from pathlib import Path


DEFAULT_FONT = "方正姚体"
DEFAULT_BANNED = ["集团级", "集团"]


def read_xml_files(path: Path):
    with zipfile.ZipFile(path) as zf:
        bad = zf.testzip()
        if bad:
            raise RuntimeError(f"corrupt zip member: {bad}")
        for name in zf.namelist():
            if name.endswith(".xml"):
                yield name, zf.read(name).decode("utf-8", errors="ignore")


def main() -> int:
    parser = argparse.ArgumentParser(description="Check Hainachuan PPTX constraints")
    parser.add_argument("pptx", type=Path)
    parser.add_argument("--font", default=DEFAULT_FONT)
    parser.add_argument("--allow-term", action="append", default=[])
    parser.add_argument("--banned", action="append", default=[])
    args = parser.parse_args()

    path = args.pptx
    if not path.exists():
        print(f"FAIL missing file: {path}", file=sys.stderr)
        return 2
    if path.suffix.lower() != ".pptx":
        print(f"FAIL expected .pptx: {path}", file=sys.stderr)
        return 2

    fonts: list[str] = []
    banned_terms = [t for t in (args.banned or DEFAULT_BANNED) if t not in args.allow_term]
    hits: list[tuple[str, str]] = []
    slide_names: set[str] = set()

    try:
        for name, text in read_xml_files(path):
            if re.match(r"ppt/slides/slide\d+\.xml$", name):
                slide_names.add(name)
            fonts.extend(re.findall(r'typeface="([^"]*)"', text))
            for term in banned_terms:
                if term and term in text:
                    hits.append((name, term))
    except Exception as exc:
        print(f"FAIL {exc}", file=sys.stderr)
        return 1

    font_counts = Counter(fonts)
    bad_fonts = sorted({f for f in fonts if f and f != args.font})

    ok = True
    print(f"file: {path}")
    print(f"slides: {len(slide_names)}")
    print(f"font declarations: {font_counts.most_common(8)}")

    if not slide_names:
        print("FAIL no slides found")
        ok = False
    if bad_fonts:
        print(f"FAIL non-{args.font} fonts: {bad_fonts}")
        ok = False
    if hits:
        print("FAIL banned terms:")
        for name, term in hits[:20]:
            print(f"  {term} in {name}")
        if len(hits) > 20:
            print(f"  ... {len(hits) - 20} more")
        ok = False

    if ok:
        print("PASS core Hainachuan PPTX checks")
        return 0
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
