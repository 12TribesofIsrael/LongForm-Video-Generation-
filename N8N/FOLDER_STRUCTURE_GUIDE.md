# 📁 Folder Structure Guide - LongForm Video Platform

**📋 Document Version**: `v2.1.0`  
**🔄 Last Updated**: June 27, 2025  
**🎯 Purpose**: Complete guide to the reorganized folder structure with version control

---

## 🏗️ **New Organized Structure**

### **📂 Current Folder Organization**

```
LongForm_/
├── 📦 RELEASES/                      # ⭐ VERSION-CONTROLLED RELEASES
│   ├── v3.0.0/                      # Latest - Black Hebrew Israelite Specialized
│   │   ├── BHI-Workflow-v3.0.0.json          # Specialized workflow
│   │   ├── BHI-Template-v3.0.0.json          # 20-scene cultural template
│   │   └── RELEASE_NOTES_v3.0.0.md           # Complete release documentation
│   │
│   └── v2.1.0/                      # Stable - Bible Chapter Generator
│       ├── ScaleMaster-v1.2.0.json           # Enhanced workflow
│       ├── ScaleTemplate-v1.2.0.json         # CapCut-style template
│       ├── FinalMaster-v2.1.0.json           # Production workflow
│       └── RELEASE_NOTES_v2.1.0.md           # Release documentation
│
├── 📖 Bible_Chapter_Videos/         # ⭐ MAIN PRODUCTION SYSTEM (v2.1.0)
│   ├── 📋 CORE SYSTEM
│   │   ├── BibleChapterMaster.json            # Main n8n workflow
│   │   ├── BibleChapterTemplate.json          # JSON2Video template
│   │   └── biblical_text_processor.py         # Text processing automation
│   │
│   ├── 📝 INPUT/OUTPUT
│   │   ├── Input                              # Source text file
│   │   ├── processed_biblical_text_*.txt      # Processed outputs
│   │   └── output/                            # Generated videos
│   │
│   ├── 📚 DOCUMENTATION (v2.1.0)
│   │   ├── README.md                          # Project overview
│   │   ├── PROJECT_OVERVIEW.md                # Technical architecture
│   │   ├── SYSTEM_ARCHITECTURE.md             # System design
│   │   ├── QUICK_START_GUIDE.md               # 30-minute setup
│   │   ├── 4_MINUTE_VIDEO_OPTIMIZATION_GUIDE.md # Video optimization
│   │   ├── HANDOVER_COMPLETE.md               # Complete handover
│   │   ├── DEVELOPMENT_ROADMAP.md             # Development plan
│   │   ├── PHASE_TRACKER.md                   # Progress tracking
│   │   ├── TESTING_STRATEGY.md                # Testing methodology
│   │   ├── TESTING_RESULTS.md                 # Test validation
│   │   └── PRODUCTION_DEPLOYMENT_CHECKLIST.md # Deployment guide
│   │
│   └── 🧪 TESTING
│       ├── tests/                             # Test workflows
│       └── templates/                         # Template variations
│
├── ⚖️ scale/                        # SCALE VIDEO GENERATOR (v1.2.0)
│   ├── ScaleMaster.json                       # Enhanced workflow
│   ├── ScaleTemplate.json                     # CapCut template
│   ├── README.md                              # Scale documentation
│   └── ScaleMD.md                             # Comprehensive scaling guide
│
├── 🎥 Final/                        # FINAL PRODUCTION WORKFLOWS
│   ├── FinalMaster.json                       # Master workflow
│   └── Template/                              # Template collection
│
├── 🔄 n8n/                          # N8N IMPLEMENTATIONS
│   ├── final.json                             # Final workflow
│   └── master2.json                           # Development versions
│
├── 🔧 make.com/                     # MAKE.COM IMPLEMENTATIONS
│   └── Short Master working6242025.blueprint.json # Reference workflow
│
├── 🗃️ Archive/                      # HISTORICAL & LEGACY
│   └── Legacy_Workflows/                      # Pre-v1.0 systems
│       ├── Master_Long_Form.json              # Legacy workflows
│       ├── Top_10_Videos.json                 # Archived formats
│       └── README.md                          # Archive documentation
│
├── 📋 VERSION CONTROL & DOCS
│   ├── README.md                              # Main project overview (v2.1.0)
│   ├── DEVELOPER_HANDOFF.md                   # Technical handover (v2.1.0)
│   ├── VERSIONING_STRATEGY.md                 # Version control guide
│   ├── FOLDER_STRUCTURE_GUIDE.md              # This file
│   └── json2video_template_fixed.json         # Template configuration
│
└── 🔄 Versions/                     # ⚠️ OLD FOLDER (to be archived)
    ├── Version6n8n.json                      # → Moved to RELEASES/v3.0.0/
    └── Version6Template.json                 # → Moved to RELEASES/v3.0.0/
```

---

## 🎯 **Folder Purpose & Usage**

### **📦 RELEASES/ - Version Control Hub**
**Purpose**: Centralized version releases with complete documentation  
**Usage**: Download specific versions for deployment  
**Structure**: `vMAJOR.MINOR.PATCH/` folders with complete release packages

#### **v3.0.0 - Black Hebrew Israelite Specialized**
- **Target Users**: Cultural authenticity focused biblical content
- **Features**: Melanated skin requirements, traditional Hebrew garments
- **Status**: Latest release with breaking changes

#### **v2.1.0 - Bible Chapter Generator**  
- **Target Users**: General biblical video creation
- **Features**: Production-ready with professional quality
- **Status**: Stable, well-documented, recommended for most users

### **📖 Bible_Chapter_Videos/ - Main Production System**
**Purpose**: Complete biblical video generation system  
**Usage**: Primary development and production environment  
**Features**: Full documentation, automation scripts, testing framework

### **⚖️ scale/ - Scale Video Generator**
**Purpose**: General video generation with enhanced features  
**Usage**: Non-biblical content, template experimentation  
**Features**: CapCut-style subtitles, enhanced overlay text

### **🎥 Final/ - Production Workflows**
**Purpose**: Final, tested workflow versions  
**Usage**: Stable workflows for production deployment  
**Status**: Proven, reliable versions

### **🗃️ Archive/ - Historical Systems**
**Purpose**: Legacy workflows and historical reference  
**Usage**: Reference for development evolution, rollback if needed  
**Status**: No active support, reference only

---

## 🏷️ **Version Control System**

### **File Naming Convention**
**Format**: `{ComponentName}-v{MAJOR}.{MINOR}.{PATCH}.{extension}`

**Examples**:
- `BHI-Workflow-v3.0.0.json` - Black Hebrew Israelite workflow
- `ScaleMaster-v1.2.0.json` - Scale video generator
- `FinalMaster-v2.1.0.json` - Final production workflow

### **Documentation Versioning**
**Major Documents** (version-controlled):
- `README.md` (v2.1.0) - Main project overview
- `PROJECT_OVERVIEW.md` (v2.1.0) - Technical architecture
- `SYSTEM_ARCHITECTURE.md` (v2.1.0) - System design
- `HANDOVER_COMPLETE.md` (v2.1.0) - Complete handover

### **Version Support Policy**
- **v3.0.0**: ✅ Active development, full support
- **v2.1.0**: ✅ Maintenance, bug fixes
- **v1.2.0**: ⚠️ Limited support, security only
- **Legacy**: 📁 Archive only, no support

---

## 🔄 **Migration from Old Structure**

### **From Old `Versions/` Folder**
**✅ COMPLETED**:
- `Version6n8n.json` → `RELEASES/v3.0.0/BHI-Workflow-v3.0.0.json`
- `Version6Template.json` → `RELEASES/v3.0.0/BHI-Template-v3.0.0.json`

**📋 RECOMMENDED**:
- Archive or delete old `Versions/` folder after confirming RELEASES/ structure
- Update any scripts or references to use new paths

### **Current File Locations**
**Active Development**:
- Main biblical system: `Bible_Chapter_Videos/`
- Scale generator: `scale/`
- Production workflows: `Final/`

**Version Releases**:
- Latest version: `RELEASES/v3.0.0/`
- Stable version: `RELEASES/v2.1.0/`
- Legacy versions: `Archive/`

---

## 🚀 **Best Practices for Usage**

### **For Development**
1. **Work in main folders** (`Bible_Chapter_Videos/`, `scale/`)
2. **Test thoroughly** before creating releases
3. **Document changes** in component folders
4. **Create releases** only for major milestones

### **For Production Deployment**
1. **Use RELEASES/ folder** for stable versions
2. **Follow version-specific documentation**
3. **Backup current system** before upgrades
4. **Test in staging** before production

### **For Version Control**
1. **Follow semantic versioning** (MAJOR.MINOR.PATCH)
2. **Create release notes** for each version
3. **Archive old versions** but keep accessible
4. **Update documentation** with version info

---

## 📞 **Navigation Quick Reference**

### **🔍 Looking for...**

**Latest Black Hebrew Israelite Workflow**:
→ `RELEASES/v3.0.0/BHI-Workflow-v3.0.0.json`

**Stable Bible Chapter Generator**:
→ `Bible_Chapter_Videos/` (main development)
→ `RELEASES/v2.1.0/` (stable release)

**Enhanced Scale Generator**:
→ `scale/ScaleMaster.json`

**Complete Documentation**:
→ `Bible_Chapter_Videos/` (comprehensive docs)
→ `RELEASES/vX.Y.Z/RELEASE_NOTES_vX.Y.Z.md` (version-specific)

**Legacy/Historical Workflows**:
→ `Archive/Legacy_Workflows/`

**Version Control Information**:
→ `VERSIONING_STRATEGY.md`

---

## 🎊 **Folder Structure Benefits**

### **✅ Advantages of New Organization**

1. **Clear Version Control**: Easy to find and deploy specific versions
2. **Organized Documentation**: Version-controlled docs with clear lineage
3. **Separation of Concerns**: Development vs. production vs. archive
4. **Professional Structure**: Industry-standard organization
5. **Easy Navigation**: Logical hierarchy with clear purposes
6. **Future-Proof**: Scalable structure for continued development

### **📈 Improved Workflow**

- **Developers**: Clear development paths in main folders
- **Users**: Easy access to stable releases
- **Maintainers**: Organized version control and documentation
- **New Team Members**: Clear structure for onboarding

---

**🏆 SUMMARY**: The new folder structure provides professional-grade organization with clear version control, making the LongForm Video Platform more maintainable, accessible, and ready for team collaboration.** 