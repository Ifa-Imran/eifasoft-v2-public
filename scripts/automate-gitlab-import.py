"""
GitLab Repository Import Automation
Mirrors all 64 GitHub README files to GitLab with proper structure
"""

import os
import json
from pathlib import Path
import requests
from dotenv import load_dotenv

load_dotenv()

# GitLab Configuration
GITLAB_TOKEN = os.getenv('GITLAB_TOKEN')  # Get from https://gitlab.com/-/profile/personal_access_tokens
GITLAB_USERNAME = os.getenv('GITLAB_USERNAME')
GITLAB_API_URL = 'https://gitlab.com/api/v4'

# Service categories matching GitHub structure
SERVICES = {
    "01-core-services": [
        "website-designing-development",
        "mobile-app-development",
        "software-development",
        "mlm-software-development",
        "digital-marketing",
        "e-commerce-development",
        "accounting-software",
        "coaching-management-software",
        "hospital-management-software",
        "blockchain-development",
        "dapp-development",
        "flutter-app-development",
        "ai-services",
        "crypto-exchange-development"
    ],
    "02-mlm-specialized-plans": [
        "mlm-binary-plan",
        "mlm-matrix-plan",
        "mlm-unilevel-plan",
        "mlm-board-plan",
        "mlm-generation-plan",
        "mlm-hybrid-plan",
        "mlm-gift-plan",
        "mlm-helping-plan",
        "mlm-party-plan",
        "mlm-single-leg-plan",
        "mlm-stair-step-plan",
        "mlm-spillover-binary",
        "mlm-repurchase-plan",
        "mlm-mobile-recharge-plan",
        "mlm-investment-plan",
        "mlm-roi-plan",
        "mlm-donation-plan",
        "mlm-autopool-plan",
        "mlm-smart-contract",
        "mlm-cryptocurrency",
        "mlm-tron-plan",
        "mlm-real-estate-plan",
        "mlm-bucket-help-plan",
        "mlm-australian-x-up-plan",
        "mlm-bitcoin-plan",
        "mlm-50-50-plan",
        "mlm-mobious-loop-plan",
        "multi-level-marketing-app",
        "multi-level-marketing-platform"
    ],
    "03-blockchain-crypto": [
        "smart-contract-development",
        "token-development",
        "defi-solutions",
        "nft-marketplace",
        "blockchain-consulting",
        "web3-development"
    ],
    "04-ai-ml-services": [
        "custom-ai-models",
        "ai-agent-ecosystems",
        "generative-ai-solutions",
        "ai-consulting",
        "intelligent-automation",
        "mlops-services",
        "nlp-solutions",
        "computer-vision",
        "predictive-analytics"
    ],
    "05-devops-cloud": [
        "devops-cloud-services",
        "api-development",
        "it-consulting",
        "software-maintenance"
    ],
    "06-tools-resources": [
        "mlm-plan-comparison-tool",
        "mlm-pricing-calculator",
        "mlm-roi-estimator",
        "cheap-affordable-mlm-software"
    ]
}

def get_headers():
    """Get authentication headers for GitLab API"""
    return {
        'PRIVATE-TOKEN': GITLAB_TOKEN,
        'Content-Type': 'application/json'
    }

def create_gitlab_project(project_name, description=""):
    """Create a new GitLab project"""
    url = f'{GITLAB_API_URL}/projects'
    
    # Get user info first to find namespace ID
    user_response = requests.get(f'{GITLAB_API_URL}/user', headers=get_headers())
    if user_response.status_code != 200:
        print(f"❌ Could not get user info: {user_response.text}")
        return None
    
    user_data = user_response.json()
    namespace_id = user_data['id']
    
    data = {
        'name': project_name,
        'description': description,
        'visibility': 'public',
        'initialize_with_readme': True,
        'auto_devops_enabled': False,
        'namespace_id': namespace_id
    }
    
    response = requests.post(url, headers=get_headers(), json=data)
    
    if response.status_code == 201:
        print(f"✅ Created GitLab project: {project_name}")
        return response.json()
    else:
        print(f"❌ Failed to create {project_name}: {response.text}")
        return None

def upload_readme_to_project(project_id, readme_content, project_name):
    """Upload README.md to GitLab project"""
    url = f'{GITLAB_API_URL}/projects/{project_id}/repository/files'
    
    data = {
        'branch': 'main',
        'commit_message': f'Add comprehensive documentation for {project_name}',
        'author_email': 'automation@eifasoft.com',
        'actions': [
            {
                'action': 'create',
                'file_path': 'README.md',
                'content': readme_content
            }
        ]
    }
    
    response = requests.post(url, headers=get_headers(), json=data)
    
    if response.status_code in [201, 200]:
        print(f"   ✅ Uploaded README to {project_name}")
        return True
    else:
        print(f"   ❌ Failed to upload README to {project_name}: {response.text}")
        return False

def read_readme_file(filepath):
    """Read README content from local file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return None

def main():
    """Main automation function"""
    print("🚀 Starting GitLab Repository Import...\n")
    
    base_path = Path('github-backlinks')
    total_created = 0
    total_uploaded = 0
    
    # Create main index repository first
    print("📁 Creating main index repository...")
    main_readme = read_readme_file(base_path / 'README.md')
    if main_readme:
        project = create_gitlab_project(
            'open-source-guides',
            'EifaSoft Technologies - Complete Open Source Documentation Hub'
        )
        if project:
            upload_readme_to_project(project['id'], main_readme, 'open-source-guides')
            total_created += 1
            total_uploaded += 1
    
    # Process each category
    for category, services in SERVICES.items():
        print(f"\n{'='*60}")
        print(f"📂 Processing Category: {category}")
        print(f"{'='*60}\n")
        
        category_path = base_path / category
        
        for service in services:
            service_path = category_path / service / 'README.md'
            
            if service_path.exists():
                readme_content = read_readme_file(service_path)
                
                if readme_content:
                    # Create project name from service path
                    project_name = service.replace('-', '-').replace('_-', '-')
                    
                    # Extract description from README (first paragraph after title)
                    description = f"EifaSoft Technologies - {service.replace('-', ' ').title()} Documentation"
                    
                    # Create GitLab project
                    project = create_gitlab_project(project_name, description)
                    
                    if project:
                        total_created += 1
                        
                        # Upload README
                        if upload_readme_to_project(project['id'], readme_content, project_name):
                            total_uploaded += 1
                            
                            # Print GitLab URL
                            gitlab_url = f"https://gitlab.com/{GITLAB_USERNAME}/{project_name}"
                            print(f"   🔗 Live URL: {gitlab_url}\n")
    
    print(f"\n{'='*60}")
    print(f"✅ GitLab Import Complete!")
    print(f"{'='*60}")
    print(f"📊 Statistics:")
    print(f"   • Projects Created: {total_created}")
    print(f"   • READMEs Uploaded: {total_uploaded}")
    print(f"   • Success Rate: {(total_uploaded/total_created*100) if total_created > 0 else 0:.1f}%")
    print(f"\n🎯 Next Steps:")
    print(f"   1. Verify all repositories are public")
    print(f"   2. Add topic tags: eifasoft, documentation, opensource")
    print(f"   3. Enable CI/CD badges for professional appearance")
    print(f"   4. Cross-link between GitLab and GitHub")

if __name__ == '__main__':
    main()
