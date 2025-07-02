# 🔧 Source Code Components

**📋 Purpose**: Development source code and utilities for the Bible Chapter Video Generator system  
**🔄 Last Updated**: June 27, 2025  
**📁 Directory Status**: Ready for development components

---

## 🎯 **Intended Contents**

### **🐍 Python Modules** (Future Development)
- **`text_processors.py`** - Advanced text processing utilities
- **`api_clients.py`** - JSON2Video and Perplexity API wrapper classes
- **`template_generators.py`** - Dynamic template creation utilities
- **`video_validators.py`** - Quality assurance and validation functions

### **🔧 Utility Scripts** (Future Development)
- **`batch_processor.py`** - Batch processing for multiple chapters
- **`quality_checker.py`** - Automated quality validation
- **`metrics_calculator.py`** - Performance and cost tracking
- **`backup_manager.py`** - Automated backup and versioning

### **📊 Configuration Files** (Future Development)
- **`config.yaml`** - System configuration parameters
- **`api_settings.json`** - API endpoint and credential configurations
- **`templates_config.json`** - Template management settings

---

## 🚀 **Current Implementation**

### **✅ Active Components**
- **Main Script**: `biblical_text_processor.py` (located in parent directory)
- **Workflow Files**: `BibleChapterMaster.json`, `BibleChapterTemplate.json`
- **Documentation**: Complete documentation suite in parent directory

### **📋 Development Guidelines**

#### **Code Standards**
- **Language**: Python 3.7+ preferred
- **Style**: PEP 8 compliance
- **Documentation**: Comprehensive docstrings
- **Testing**: Unit tests for all new functions

#### **Module Structure**
```python
# Example structure for future modules
"""
Bible Chapter Video Generator - [Module Name]

This module provides [specific functionality] for the Bible Chapter
Video Generator system.
"""

import logging
from typing import Dict, List, Optional

class [ClassName]:
    """[Class description]"""
    
    def __init__(self, config: Dict):
        """Initialize with configuration parameters."""
        pass
```

---

## 📁 **Integration Points**

### **🔄 Workflow Integration**
- Scripts should integrate with existing n8n workflows
- Maintain compatibility with current `biblical_text_processor.py`
- Support JSON2Video API and template system

### **📊 Data Flow**
```
Input Text → src/text_processors.py → Processed Sections
     ↓
n8n Workflow → src/api_clients.py → JSON2Video API
     ↓
Video Output → src/video_validators.py → Quality Metrics
```

---

## 🧪 **Testing Framework** (Future)

### **Test Structure**
```
src/
├── tests/
│   ├── test_text_processors.py
│   ├── test_api_clients.py
│   ├── test_template_generators.py
│   └── test_integration.py
└── [module files]
```

---

## 📝 **Development Roadmap**

### **Phase 1: Core Utilities**
- [ ] Extract common functions from `biblical_text_processor.py`
- [ ] Create reusable API client classes
- [ ] Build configuration management system

### **Phase 2: Advanced Features**
- [ ] Batch processing capabilities
- [ ] Advanced template generation
- [ ] Quality assurance automation

### **Phase 3: Enterprise Features**
- [ ] Performance monitoring
- [ ] Advanced analytics
- [ ] Multi-language support

---

**💡 Note**: This directory is prepared for future development. Current functionality is handled by the main script in the parent directory. 