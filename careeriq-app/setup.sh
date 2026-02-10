#!/bin/bash

# CareerIQ SaaS - Quick Setup Script
# Run this after configuring your .env.local file

set -e

echo "🚀 CareerIQ SaaS Setup"
echo "====================="
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "❌ Error: .env.local not found!"
    echo "📝 Please copy .env.local.example to .env.local and fill in your keys"
    exit 1
fi

# Check for required environment variables
echo "🔍 Checking environment variables..."

required_vars=(
    "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"
    "CLERK_SECRET_KEY"
    "NEXT_PUBLIC_SUPABASE_URL"
    "NEXT_PUBLIC_SUPABASE_ANON_KEY"
    "SUPABASE_SERVICE_ROLE_KEY"
    "OPENAI_API_KEY"
)

missing_vars=()

for var in "${required_vars[@]}"; do
    if ! grep -q "^${var}=" .env.local || grep -q "^${var}=$" .env.local; then
        missing_vars+=("$var")
    fi
done

if [ ${#missing_vars[@]} -gt 0 ]; then
    echo "⚠️  Missing or empty environment variables:"
    for var in "${missing_vars[@]}"; do
        echo "   - $var"
    done
    echo ""
    echo "Please configure these in .env.local before continuing."
    echo "See README.md for setup instructions."
    exit 1
fi

echo "✅ All required environment variables are set"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo "✅ Dependencies installed"
echo ""

# Instructions for Supabase
echo "📊 Database Setup"
echo "=================="
echo ""
echo "Next steps for Supabase:"
echo "1. Go to your Supabase project → SQL Editor"
echo "2. Run the contents of: database/schema.sql"
echo "3. (Optional) Run: database/seed.sql for sample salary data"
echo ""
echo "Press ENTER when database is ready..."
read

# Build the application
echo "🔨 Building application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Final instructions
echo "🎉 Setup Complete!"
echo "=================="
echo ""
echo "To run locally:"
echo "  npm run dev"
echo ""
echo "To deploy to Vercel:"
echo "  1. Install Vercel CLI: npm i -g vercel"
echo "  2. Run: vercel"
echo "  3. Follow the prompts"
echo "  4. Add environment variables in Vercel dashboard"
echo "  5. Update webhook URLs in Clerk and Stripe"
echo ""
echo "📖 See README.md for detailed instructions"
echo ""
echo "Next steps:"
echo "  ✓ Configure Stripe (create product + webhooks)"
echo "  ✓ Set up Clerk webhooks"
echo "  ✓ Deploy to Vercel"
echo "  ✓ Start getting customers! 💰"
