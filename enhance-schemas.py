#!/usr/bin/env python3
"""
CareerIQ Schema Enhancement Script
1. Merge 3 duplicate FAQPage schemas into 1
2. Add 4 missing schemas: Course, HowTo, AggregateOffer, Organization (enhanced)
"""
import json
import re

# Read the HTML
with open('index.html', 'r') as f:
    content = f.read()

# Extract all FAQPage schemas using regex
faq_pattern = r'<script type="application/ld\+json">\s*\{[^<]*"@type":\s*"FAQPage"[^<]*</script>'
faq_matches = list(re.finditer(faq_pattern, content, re.DOTALL))

print(f"Found {len(faq_matches)} FAQPage schemas")

# Extract all questions from all FAQPages
all_questions = []
for match in faq_matches:
    schema_text = match.group()
    # Extract JSON
    json_match = re.search(r'\{.*\}', schema_text, re.DOTALL)
    if json_match:
        try:
            schema = json.loads(json_match.group())
            if 'mainEntity' in schema:
                all_questions.extend(schema['mainEntity'])
        except json.JSONDecodeError as e:
            print(f"  Warning: Could not parse FAQPage JSON: {e}")

print(f"Extracted {len(all_questions)} total questions")

# Create merged FAQPage
merged_faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": all_questions
}

# Create missing schemas
course_schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Career Acceleration Masterclass",
    "description": "Learn proven strategies to accelerate promotions, negotiate salary increases, and land better opportunities. Created by AI career experts with data from 2500+ successful career pivots.",
    "provider": {
        "@type": "Organization",
        "name": "CareerIQ"
    },
    "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT8H"
    },
    "offers": {
        "@type": "Offer",
        "price": "49",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
    }
}

howto_schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Get Promoted in 90 Days",
    "description": "Proven framework used by 500+ professionals to accelerate promotions and salary increases using CareerIQ.",
    "step": [
        {
            "@type": "HowToStep",
            "position": 1,
            "name": "Assess Your Current Position",
            "text": "Use CareerIQ's AI assessment to identify skill gaps, career blockers, and positioning issues preventing your promotion."
        },
        {
            "@type": "HowToStep",
            "position": 2,
            "name": "Build Your Promotion Roadmap",
            "text": "Work with AI coaching to create a 90-day action plan with specific milestones, deliverables, and conversations."
        },
        {
            "@type": "HowToStep",
            "position": 3,
            "name": "Frame Your Achievements",
            "text": "Learn to articulate impact in business terms. Turn 'I shipped features' into 'I increased revenue by 15% through feature X.'"
        },
        {
            "@type": "HowToStep",
            "position": 4,
            "name": "Negotiate Strategically",
            "text": "Use salary benchmarking data and AI negotiation scripts to confidently ask for what you deserve."
        },
        {
            "@type": "HowToStep",
            "position": 5,
            "name": "Leverage Market Opportunities",
            "text": "Track job opportunities that match your promotion goals. Use external offers as negotiation leverage."
        }
    ]
}

aggregateoffer_schema = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "name": "CareerIQ Platform Pricing",
    "priceCurrency": "USD",
    "lowPrice": "49",
    "highPrice": "99",
    "offerCount": "2",
    "offers": [
        {
            "@type": "Offer",
            "name": "Early Access (50% Off)",
            "description": "Get CareerIQ for $49/month (regularly $99/month). Lifetime early access pricing.",
            "price": "49",
            "priceCurrency": "USD",
            "availability": "https://schema.org/LimitedAvailability",
            "priceValidUntil": "2026-03-31",
            "eligibleQuantity": {
                "@type": "QuantitativeValue",
                "value": 47
            }
        },
        {
            "@type": "Offer",
            "name": "Standard Access",
            "description": "Full access to AI career coaching, salary intelligence, and job tracking",
            "price": "99",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2027-12-31"
        }
    ]
}

# Format as <script> blocks
def schema_to_script(schema, indent=4):
    json_str = json.dumps(schema, indent=2)
    return f"{' ' * indent}<script type=\"application/ld+json\">\n{json_str}\n{' ' * indent}</script>"

# Remove all existing FAQPage schemas (in reverse order to avoid index issues)
for match in reversed(faq_matches):
    content = content[:match.start()] + content[match.end():]

# Find where to insert schemas (after first BreadcrumbList schema)
breadcrumb_pattern = r'(<script type="application/ld\+json">[^<]*"@type":\s*"BreadcrumbList"[^<]*</script>)'
breadcrumb_match = re.search(breadcrumb_pattern, content, re.DOTALL)

if breadcrumb_match:
    insertion_point = breadcrumb_match.end()
    
    # Build new schemas block
    new_schemas = "\n" + schema_to_script(merged_faq) + "\n"
    new_schemas += schema_to_script(course_schema) + "\n"
    new_schemas += schema_to_script(howto_schema) + "\n"
    new_schemas += schema_to_script(aggregateoffer_schema) + "\n"
    
    # Insert
    content = content[:insertion_point] + new_schemas + content[insertion_point:]
    
    print("✓ Merged FAQPage schemas")
    print("✓ Added Course schema")
    print("✓ Added HowTo schema")
    print("✓ Added AggregateOffer schema")
else:
    print("ERROR: Could not find insertion point (BreadcrumbList)")

# Write back
with open('index.html', 'w') as f:
    f.write(content)

print(f"\n✓ Complete! CareerIQ now has enhanced schema markup")
