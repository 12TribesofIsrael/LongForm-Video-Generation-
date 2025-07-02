#!/usr/bin/env python3
"""
LongForm Video Generation Platform - Setup Script
Backward-compatible setup.py for traditional pip installation
"""

from setuptools import setup, find_packages
import os
import sys

# Verify Python version
if sys.version_info < (3, 7):
    print("Error: LongForm Video Platform requires Python 3.7 or higher")
    print(f"Current version: {sys.version}")
    sys.exit(1)

# Read the README file for long description
def read_readme():
    readme_path = os.path.join(os.path.dirname(__file__), 'README.md')
    if os.path.exists(readme_path):
        with open(readme_path, 'r', encoding='utf-8') as f:
            return f.read()
    return "Professional Bible Chapter Video Generation Platform with AI-powered content creation"

# Read requirements from requirements.txt
def read_requirements(filename):
    req_path = os.path.join(os.path.dirname(__file__), filename)
    if os.path.exists(req_path):
        with open(req_path, 'r', encoding='utf-8') as f:
            return [line.strip() for line in f 
                   if line.strip() and not line.startswith('#') and not line.startswith('-r')]
    return []

# Core dependencies (minimal - most functionality uses built-ins)
install_requires = [
    'requests>=2.31.0',  # For API testing and integration
]

# Optional dependencies for different use cases
extras_require = {
    'test': [
        'pytest>=7.4.0',
        'pytest-mock>=3.11.0',
        'pytest-cov>=4.1.0',
        'jsonschema>=4.17.0',
        'responses>=0.23.0',
        'freezegun>=1.2.0',
    ],
    'dev': [
        'black>=23.0.0',
        'flake8>=6.0.0',
        'isort>=5.12.0',
        'mypy>=1.5.0',
        'pylint>=2.17.0',
        'bandit>=1.7.0',
        'radon>=6.0.0',
        'vulture>=2.7.0',
    ],
    'docs': [
        'sphinx>=7.0.0',
        'sphinx-rtd-theme>=1.3.0',
        'markdown>=3.4.0',
        'markdown-extensions>=0.1.0',
    ],
    'monitoring': [
        'colorlog>=6.7.0',
        'pyyaml>=6.0',
        'tqdm>=4.65.0',
    ],
    'full': [
        # Include all optional dependencies
        'pytest>=7.4.0',
        'pytest-mock>=3.11.0', 
        'pytest-cov>=4.1.0',
        'jsonschema>=4.17.0',
        'black>=23.0.0',
        'flake8>=6.0.0',
        'mypy>=1.5.0',
        'colorlog>=6.7.0',
        'pyyaml>=6.0',
        'tqdm>=4.65.0',
        'ipython>=8.14.0',
        'jupyter>=1.0.0',
    ],
}

setup(
    name='longform-video-generator',
    version='2.1.0',
    description='Professional Bible Chapter Video Generation Platform with AI-powered content creation',
    long_description=read_readme(),
    long_description_content_type='text/markdown',
    
    # Author and maintainer information
    author='LongForm Video Platform Team',
    author_email='team@longform-video.platform',
    maintainer='LongForm Video Platform Team',
    maintainer_email='team@longform-video.platform',
    
    # URLs and links
    url='https://github.com/longform-video/platform',
    project_urls={
        'Homepage': 'https://github.com/longform-video/platform',
        'Documentation': 'https://github.com/longform-video/platform/docs',
        'Repository': 'https://github.com/longform-video/platform.git',
        'Issues': 'https://github.com/longform-video/platform/issues',
        'Changelog': 'https://github.com/longform-video/platform/blob/main/RELEASES/',
    },
    
    # Package discovery
    packages=find_packages(
        where='.',
        include=['Bible_Chapter_Videos*', '-p*'],
        exclude=['tests*', 'Archive*', 'RELEASES*']
    ),
    package_dir={'': '.'},
    
    # Include additional files
    include_package_data=True,
    package_data={
        'Bible_Chapter_Videos': [
            '*.json',
            '*.md', 
            'Input',
            'templates/*.json',
            'tests/*.json',
        ],
        '-p': [
            '*/*.py',
            '*/Input',
            '*/Output',
            '*/README.md',
        ],
    },
    
    # Dependencies
    install_requires=install_requires,
    extras_require=extras_require,
    
    # Python version requirement
    python_requires='>=3.7',
    
    # Entry points for command-line scripts
    entry_points={
        'console_scripts': [
            'biblical-processor=Bible_Chapter_Videos.biblical_text_processor:main',
            'biblical-processor-v2=-p.biblical_text_processorv2.biblical_text_processor_v2:main',
        ],
    },
    
    # Classification
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'Intended Audience :: Developers',
        'Intended Audience :: Religion',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8', 
        'Programming Language :: Python :: 3.9',
        'Programming Language :: Python :: 3.10',
        'Programming Language :: Python :: 3.11',
        'Programming Language :: Python :: 3.12',
        'Topic :: Multimedia :: Video',
        'Topic :: Religion',
        'Topic :: Software Development :: Libraries :: Python Modules',
        'Topic :: Text Processing :: Linguistic',
        'Topic :: Scientific/Engineering :: Artificial Intelligence',
    ],
    
    # Keywords for discoverability
    keywords=[
        'video-generation',
        'biblical-content',
        'automation', 
        'ai-content',
        'n8n-workflows',
        'json2video',
        'text-processing',
        'religious-content',
    ],
    
    # License
    license='MIT',
    
    # Zip safety
    zip_safe=False,
)

# Post-installation message
print("""
🎬 LongForm Video Generation Platform - Installation Complete!

✅ Core Functionality: Ready (uses Python built-ins only)
🧪 Testing Capabilities: Available with 'pip install .[test]'
🛠️  Development Tools: Available with 'pip install .[dev]' 
📚 Documentation: Available with 'pip install .[docs]'
🎯 Everything: Available with 'pip install .[full]'

📋 Next Steps:
1. Read: INSTALLATION_GUIDE.md for detailed setup instructions
2. Quick Start: QUICK_START_GUIDE.md for 30-minute deployment
3. Production: PRODUCTION_USER_GUIDE.md for live deployment

🚀 Ready to generate professional biblical videos!
""") 