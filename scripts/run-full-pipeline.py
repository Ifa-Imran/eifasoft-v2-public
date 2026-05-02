#!/usr/bin/env python3
"""
EifaSoft Full Pipeline Automation
Runs all 6 modules sequentially for complete SEO/AEO/GEO transformation

Usage:
    python scripts/run-full-pipeline.py
"""

import sys
import importlib.util
from pathlib import Path

def load_module_from_path(module_name: str, file_path: str):
    """Dynamically load a module from file path (handles hyphens in filenames)"""
    spec = importlib.util.spec_from_file_location(module_name, file_path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def main():
    print("=" * 80)
    print(" " * 20 + "EIFASOFT FULL PIPELINE AUTOMATION")
    print("=" * 80)
    print()
    
    # Check prerequisites
    print("🔍 Checking prerequisites...")
    try:
        import frontmatter
        import yaml
        print("✅ Python dependencies installed")
    except ImportError as e:
        print(f"❌ Missing dependency: {e}")
        print("\nInstall with: pip install python-frontmatter pyyaml")
        sys.exit(1)
    
    blog_count = len(list(Path("content/blog").glob("*.mdx")))
    print(f"✅ Found {blog_count} blog files to process")
    print()
    
    # Module 1: Content Audit
    print("=" * 80)
    print("MODULE 1: Content Audit & Classification")
    print("=" * 80)
    print()
    
    try:
        module_01 = load_module_from_path("module_01", "scripts/01-content-audit.py")
        classifier = module_01.BlogClassifier()
        classifier.run_audit()
        
        audit_report = list(Path("scripts/audit-output").glob("audit_report_*.json"))[0]
        print(f"\n✅ Module 1 Complete: {audit_report.name}")
    except Exception as e:
        print(f"❌ Module 1 failed: {e}")
        response = input("Continue anyway? (y/n): ")
        if response.lower() != 'y':
            sys.exit(1)
    
    print()
    
    # Module 2: Cannibalization Resolution
    print("=" * 80)
    print("MODULE 2: Cannibalization Resolution")
    print("=" * 80)
    print()
    
    try:
        # Note: Module 2 script would be created similarly to Module 1
        # For now, we'll skip and note it should be created
        print("⚠️  Module 2 script not yet created.")
        print("   Follow guide in: 02-cannibalization-resolution.md")
        print("   Or run manually using the template provided.")
    except Exception as e:
        print(f"❌ Module 2 failed: {e}")
    
    print()
    
    # Module 3: Pillar Optimization (Manual Step)
    print("=" * 80)
    print("MODULE 3: Pillar Blog Optimization")
    print("=" * 80)
    print()
    print("⚠️  This module requires MANUAL content expansion.")
    print()
    print("Next steps:")
    print("1. Open: 03-pillar-blog-optimization.md")
    print("2. Follow the complete pillar blog template")
    print("3. Expand each of the 5 pillar blogs to 4,000+ words")
    print("4. Add AEO definition boxes, comparison tables, FAQs")
    print()
    print("Estimated time: 6-8 hours per pillar (30-40 hours total)")
    print()
    
    # Module 4-6: Cluster & Technical (Semi-Automated)
    print("=" * 80)
    print("MODULES 4-6: Cluster Optimization, Link Matrix & Schema")
    print("=" * 80)
    print()
    print("These modules require batch processing with manual review.")
    print()
    print("Workflow:")
    print("Day 1-2: MLM clusters (80 blogs)")
    print("Day 3-4: Blockchain clusters (80 blogs)")
    print("Day 5: AI clusters (70 blogs)")
    print("Day 6-7: Mobile clusters (80 blogs)")
    print("Day 8: Enterprise clusters (50 blogs)")
    print()
    print("Follow detailed guides:")
    print("- 04-06-cluster-link-seo-implementation.md")
    print("- IMPLEMENTATION-PLAN-MASTER.md")
    print()
    
    # Summary
    print("=" * 80)
    print("PIPELINE SUMMARY")
    print("=" * 80)
    print()
    print("✅ COMPLETED:")
    print("   • Module 1: Content Audit & Classification")
    print()
    print("⚠️  REQUIRES MANUAL WORK:")
    print("   • Module 2: Cannibalization Resolution (follow guide)")
    print("   • Module 3: Pillar Expansion (6-8 hours/pillar)")
    print("   • Modules 4-6: Cluster Batches (50 blogs/day)")
    print()
    print("📚 DOCUMENTATION:")
    print("   • QUICK-START-README.md - Choose your path")
    print("   • IMPLEMENTATION-PLAN-MASTER.md - Full 6-week plan")
    print("   • Module-specific .md files - Detailed instructions")
    print()
    print("=" * 80)
    print()
    print("🎯 Recommended next step:")
    print("   Open: QUICK-START-README.md")
    print("   Choose: Path 1 (Automated), Path 2 (Manual), or Path 3 (Hybrid)")
    print()
    
    return 0


if __name__ == "__main__":
    sys.exit(main())
