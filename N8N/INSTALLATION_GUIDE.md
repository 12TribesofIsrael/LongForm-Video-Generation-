# 📦 LongForm Video Platform - Installation Guide

**📋 Document Version**: `v2.1.0`  
**🔄 Last Updated**: June 27, 2025  
**🎯 Purpose**: Complete dependency management and installation instructions

---

## 🚀 **Quick Start Options**

### **⚡ Minimal Installation (Recommended for Production)**
```bash
# Core functionality only - uses Python built-ins
# No dependencies needed for basic biblical text processing
cd Bible_Chapter_Videos/
python biblical_text_processor.py

cd ../p/biblical_text_processorv2/  
python biblical_text_processor_v2.py
```

### **🧪 Testing & API Integration**
```bash
# Install testing capabilities for API validation
pip install -r requirements-test.txt

# Or install specific packages for API testing
pip install requests jsonschema
```

### **🛠️ Full Development Environment**
```bash
# Complete development setup with all tools
pip install -r requirements-dev.txt

# Or using modern Python packaging
pip install -e ".[full]"
```

---

## 📋 **Installation Options Explained**

### **1. Core Functionality (Zero Dependencies) ✅**
```bash
# The biblical text processors use ONLY Python built-ins:
# - re (regular expressions)
# - os (file operations) 
# - sys (system operations)

# Simply run the scripts directly:
python Bible_Chapter_Videos/biblical_text_processor.py
python -p/biblical_text_processorv2/biblical_text_processor_v2.py
```

**Use Case**: Production environments, minimal footprint, maximum compatibility

### **2. API Testing Setup**
```bash
# Install API testing dependencies
pip install -r requirements-test.txt

# Test Perplexity AI integration
cd Bible_Chapter_Videos/
python test_biblical_prompt.py  # From TESTING_STRATEGY.md
```

**Dependencies**: `requests`, `jsonschema`, `pytest`, `responses`  
**Use Case**: Workflow validation, API testing, quality assurance

### **3. Development Environment**
```bash
# Full development setup
pip install -r requirements-dev.txt

# Code quality workflow
black .              # Format code
flake8 .             # Lint code  
mypy .               # Type checking
pytest               # Run tests
bandit -r .          # Security analysis
```

**Use Case**: Contributing to the platform, extending functionality

### **4. Modern Python Installation (Recommended)**
```bash
# Using pyproject.toml for modern dependency management
pip install -e .                    # Core package
pip install -e ".[test]"             # With testing
pip install -e ".[dev]"              # With development tools
pip install -e ".[full]"             # Everything included
```

---

## 🔧 **Component-Specific Installation**

### **📖 Bible Chapter Video Generator**
```bash
cd Bible_Chapter_Videos/

# Core functionality (no dependencies)
python biblical_text_processor.py

# With API testing
pip install requests jsonschema
python test_biblical_prompt.py

# Full development
pip install -r requirements.txt
```

### **⚡ Biblical Text Processor V2**
```bash
cd -p/biblical_text_processorv2/

# Core functionality (no dependencies)  
python biblical_text_processor_v2.py

# With enhanced features
pip install tqdm pyyaml colorlog

# Full development
pip install -r requirements.txt
```

---

## 🏭 **Production Deployment**

### **🎯 Recommended Production Setup**

**1. Minimal Production Environment**
```bash
# Verify Python version
python --version  # Requires 3.7+

# Clone/download the platform
git clone [repository-url]
cd LongForm_/

# No pip installation needed - use built-ins only
python Bible_Chapter_Videos/biblical_text_processor.py
```

**2. Production with API Monitoring**
```bash
# Install minimal dependencies for API integration
pip install requests>=2.31.0 jsonschema>=4.17.0

# Optional: Enhanced logging for production
pip install colorlog>=6.7.0 pyyaml>=6.0
```

### **🐳 Docker Setup (Optional)**
```dockerfile
# Dockerfile example for containerized deployment
FROM python:3.9-slim

WORKDIR /app
COPY . .

# Core functionality needs no dependencies
# Optional: Install testing dependencies
RUN pip install requests jsonschema

CMD ["python", "Bible_Chapter_Videos/biblical_text_processor.py"]
```

---

## 🧪 **Testing Installation**

### **Verify Core Installation**
```bash
# Test biblical text processor
cd Bible_Chapter_Videos/
echo "Test biblical content here" > Input
python biblical_text_processor.py

# Should generate processed_biblical_text_*.txt file
```

### **Verify API Integration**
```bash
# Test API dependencies
python -c "import requests, json; print('✅ API dependencies working')"

# Test Perplexity AI connection (requires API key)
python test_biblical_prompt.py
```

### **Verify Development Tools**
```bash
# Test code quality tools
black --version
flake8 --version  
mypy --version
pytest --version

# Run code quality checks
black . --check
flake8 .
mypy .
```

---

## 🔧 **Troubleshooting**

### **Common Issues**

**1. Python Version Compatibility**
```bash
# Check Python version
python --version

# If < 3.7, upgrade Python or use older package versions
# Platform supports Python 3.7+
```

**2. Import Errors**
```bash
# Core scripts should work without imports
# If you see ImportError for re, os, sys - check Python installation

# For API testing, install dependencies:
pip install requests jsonschema
```

**3. Package Installation Issues**
```bash
# Use virtual environment (recommended)
python -m venv longform-env
source longform-env/bin/activate  # Linux/Mac
longform-env\Scripts\activate     # Windows

pip install -r requirements.txt
```

**4. Permission Issues**
```bash
# Use user installation if needed
pip install --user -r requirements.txt

# Or use virtual environment (recommended)
```

---

## 📊 **Installation Verification**

### **✅ Core Functionality Test**
```bash
cd Bible_Chapter_Videos/
echo "In the beginning God created the heavens and the earth." > Input
python biblical_text_processor.py
# Should output processed text with word count
```

### **✅ Multi-Section Processor Test**
```bash
cd -p/biblical_text_processorv2/
echo "Large biblical text content here..." > Input  
python biblical_text_processor_v2.py
# Should create multiple sections in Output file
```

### **✅ API Integration Test**
```bash
# With valid Perplexity AI key
python test_biblical_prompt.py
# Should return JSON with biblical scenes
```

---

## 🎯 **Recommended Workflows**

### **For End Users (Content Creation)**
```bash
# 1. Download/clone platform
# 2. No installation needed
# 3. Use core functionality directly
python biblical_text_processor.py
```

### **For Developers (Platform Enhancement)**
```bash
# 1. Clone repository
# 2. Set up development environment
pip install -r requirements-dev.txt
# 3. Follow development workflow
black . && flake8 . && mypy . && pytest
```

### **For System Integrators (Production Deployment)**
```bash
# 1. Minimal production setup
# 2. Optional API monitoring
pip install requests jsonschema colorlog
# 3. Deploy with n8n workflows
```

---

## 📞 **Support & Next Steps**

### **After Installation**
1. **Read**: `QUICK_START_GUIDE.md` for 30-minute setup
2. **Follow**: `PRODUCTION_USER_GUIDE.md` for deployment
3. **Reference**: `QUICK_REFERENCE_CARD.md` for daily usage

### **For Development**
1. **Review**: `DEVELOPMENT_ROADMAP.md` for architecture
2. **Test**: Follow `TESTING_STRATEGY.md` for validation  
3. **Contribute**: Use development workflow above

### **For Production**
1. **Deploy**: Follow `PRODUCTION_DEPLOYMENT_CHECKLIST.md`
2. **Monitor**: Set up API monitoring and logging
3. **Scale**: Use batch processing capabilities

---

**✅ Installation Complete! Ready for biblical video generation.** 