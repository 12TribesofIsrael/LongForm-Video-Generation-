# 📋 LongForm Video Platform - Versioning Strategy

## 🎯 **Version Control Overview**

**Current Version**: `v5.1.0` ✅ **ACTIVE PRODUCTION**  
**Latest Release**: `v5.0.0` (ElevenLabs Foundation)  
**Development Version**: `v6.0.0` (In Testing)  
**Last Updated**: June 28, 2025  
**Versioning Scheme**: [Semantic Versioning (SemVer)](https://semver.org/)

---

## 📊 **Version Numbering System**

### **Format: MAJOR.MINOR.PATCH**

- **MAJOR** (X.0.0): Breaking changes, major new features, architecture changes
- **MINOR** (0.X.0): New features, enhancements, backward-compatible changes  
- **PATCH** (0.0.X): Bug fixes, documentation updates, minor improvements

### **Current Component Versions**

| Component | Version | Status | Last Updated |
|-----------|---------|--------|--------------|
| **Version 5.1 - ElevenLabs 20-Scene Production** | `v5.1.0` | ✅ **CURRENT PRODUCTION** | June 28, 2025 |
| **Version 5 - ElevenLabs Single Scene** | `v5.0.0` | ✅ **Stable Fallback** | June 28, 2025 |
| **Version 6 - Next Generation** | `v6.0.0` | 🧪 Testing | June 2024 |
| **Version 4 - Base System** | `v4.0.0` | 🔄 Stable | June 2024 |
| **Black Hebrew Israelite Workflow** | `v3.0.0` | ✅ Released | January 2024 |
| **Bible Chapter Generator** | `v2.1.0` | ✅ Production | January 2024 |
| **Biblical Text Processor Script** | `v1.1.0` | ✅ Production | January 2024 |
| **Biblical Text Processor V2** | `v2.0.0` | ✅ Production | June 28, 2025 |
| **Scale Video Generator** | `v1.2.0` | ✅ Stable | December 2023 |
| **Legacy Workflows** | `v1.0.0` | 📁 Archived | December 2023 |

---

## 📁 **Current Folder Structure**

### **Actual Organization**

```
N8N/
├── 🎬 **ACTIVE VERSIONS**
│   ├── Version 5.1 - ElevenLabs 20-Scene Production/  # v5.1.0 - CURRENT PRODUCTION
│   │   ├── README.md                         # Complete documentation
│   │   ├── Templatev5.1                      # 20-scene template with Ken Burns
│   │   └── Workflowv5.1_20scene             # n8n workflow (20-scene system)
│   │
│   ├── Version 5 - ElevenLabs Single Scene/  # v5.0.0 - STABLE FALLBACK
│   │   ├── README.md                         # Complete documentation
│   │   ├── Templatev5                        # 2-scene template with Ken Burns
│   │   └── Workflowv5_2scene                # n8n workflow (Ken Burns fixed)
│   │
│   ├── Version 4/                           # v4.0.0 - Base system
│   │   ├── Workflow                          # Core workflow
│   │   └── Template                          # Base template
│   │
│   └── Versions/                            # v6.0.0 - Next generation
│       ├── Version6n8n.json                 # Advanced workflow
│       └── Version6Template.json            # Advanced template
│
├── 📦 **RELEASES**                          # Official versioned releases
│   ├── v3.0.0/                             # Black Hebrew Israelite
│   │   ├── BHI-Workflow-v3.0.0.json
│   │   ├── BHI-Template-v3.0.0.json
│   │   ├── RELEASE_NOTES_v3.0.0.md
│   │   └── CHANGELOG_v3.0.0.md
│   │
│   └── v2.1.0/                             # Bible Chapter Generator
│       ├── BibleChapterMaster-v2.1.0.json
│       ├── BibleChapterTemplate-v2.1.0.json
│       ├── FinalMaster-v2.1.0.json
│       ├── ScaleMaster-v1.2.0.json
│       ├── ScaleTemplate-v1.2.0.json
│       ├── biblical_text_processor-v1.1.0.py
│       └── RELEASE_NOTES_v2.1.0.md
│
├── 🗃️ **LEGACY SYSTEMS**
│   ├── Bible_Chapter_Videos/               # v2.x legacy
│   ├── Archive/                            # v1.x archived
│   ├── Final/                              # Legacy final versions
│   ├── scale/                              # Scale generator
│   ├── make.com/                           # Make.com integrations
│   └── n8n/                               # Legacy n8n workflows
│
└── 📚 **DOCUMENTATION & TOOLS**
    ├── README.md                           # Main project documentation
    ├── VERSIONING_STRATEGY.md              # This file
    ├── DEVELOPER_HANDOFF.md                # Developer resources
    ├── PRODUCTION_USER_GUIDE.md            # User guides
    └── [Other documentation files...]
```

---

## 🏷️ **Version Tags and Naming**

### **File Naming Convention**

**Format**: `{ComponentName}-v{MAJOR}.{MINOR}.{PATCH}.{extension}`

**Examples**:
- `ElevenLabs-Workflow-v5.0.0.json`
- `ElevenLabs-Template-v5.0.0.json`  
- `BHI-Workflow-v3.0.0.json`
- `BibleChapterMaster-v2.1.0.json`

### **Component Abbreviations**

- **EL**: ElevenLabs (Version 5)
- **BHI**: Black Hebrew Israelite (Version 3)
- **BCG**: Bible Chapter Generator (Version 2)
- **SVG**: Scale Video Generator (Version 1)
- **LGW**: Legacy Workflow

---

## 📋 **Version History**

### **v5.1.0 - 20-Scene Production System (CURRENT)** ✅
**Release Date**: June 28, 2025  
**Breaking Changes**: ❌ No - Enhancement release building on v5.0.0

**New Features**:
- ✅ **20-Scene Architecture**: Massive scale increase from 2 to 20 scenes
- ✅ **Intelligent Content Distribution**: AI forces exactly 20 scenes regardless of input length
- ✅ **Production Template**: 240+ variables (20 scenes × 12 variables each)
- ✅ **Scalable Ken Burns System**: 5 motion types cycling across all 20 scenes
- ✅ **Professional Long-Form Videos**: 12-20 minute production-quality output
- ✅ **Template ID**: YCEc18dUc0g8Dwd9DEBS (JSON2Video platform)

**Technical Improvements**:
- Enhanced Perplexity AI prompting for consistent 20-scene output
- Scalable motion cycling system (scenes 1,6,11,16 = zoom-in, etc.)
- Production-ready template with complete variable structure
- Maintained all v5.0.0 quality features while scaling 10x

**🎬 Production Status**: Successfully generating professional biblical videos with ElevenLabs voice, Ken Burns effects, and professional captions across all 20 scenes.

### **v5.0.0 - ElevenLabs Integration + Ken Burns Effects (Foundation)** ✅
**Release Date**: June 28, 2025  
**Breaking Changes**: ✅ Yes - New voice provider and animation system

**New Features**:
- ✅ **ElevenLabs Voice Integration**: Premium voice quality (NgBYGKDDq2Z8Hnhatgma)
- ✅ **Ken Burns Cinematic Effects**: 5 different motion types (zoom-in, zoom-out, ken-burns, pan-left, pan-right)
- ✅ **Professional Yellow Captions**: Oswald Bold font with auto-sync
- ✅ **2-Scene Testing Template**: Credit-efficient development framework
- ✅ **Global Subtitles System**: v3.0.0 style implementation
- ✅ **Cultural Authenticity**: Black Hebrew Israelite representation maintained

**Technical Improvements**:
- Fixed JSON2Video animation API integration
- Proper motion variable generation in workflow
- Template-workflow synchronization for Ken Burns effects
- Professional video output with voice + captions + motion

**🎬 Verified Working**: [Sample Video with Ken Burns Effects](https://assets.json2video.com/clients/W6OcjbEMxX/renders/2025-06-28-09480.mp4)

### **v4.0.0 - Base System Architecture**
**Release Date**: June 2024  
**Breaking Changes**: ✅ Yes - Major architectural changes

**New Features**:
- Core workflow foundation
- Base template system
- Improved AI integration

### **v3.0.0 - Black Hebrew Israelite Specialized**
**Release Date**: January 2024  
**Breaking Changes**: ✅ Yes - Specialized for Black Hebrew Israelite content

**New Features**:
- ✅ Black Hebrew Israelite specialized AI prompts
- ✅ Melanated skin tone requirements in image generation
- ✅ Traditional Hebrew garment specifications  
- ✅ 20-scene template support
- ✅ Enhanced cultural authenticity features

### **v2.1.0 - Bible Chapter Generator (Production)**
**Release Date**: January 2024  
**Breaking Changes**: ❌ No - Backward compatible

**New Features**:
- ✅ Production-ready biblical video generation
- ✅ Dynamic timing (46s - 6.5+ minutes)
- ✅ Professional yellow captions
- ✅ Text processing automation
- ✅ Complete documentation suite

### **v1.2.0 - Scale Video Generator (Stable)**
**Release Date**: December 2023  
**Breaking Changes**: ❌ No - Enhancement release

**New Features**:
- ✅ Enhanced overlay text generation
- ✅ CapCut-style subtitles
- ✅ Flux-Pro image generation
- ✅ Make.com-style prompting

---

## 🔄 **Version Control Workflow**

### **Development Process**

1. **Feature Development**: Work in version-specific folders (e.g., `Version 5/`)
2. **Testing**: Validate features within version folder
3. **Documentation**: Update version-specific README files
4. **Release**: Package into `RELEASES/vX.Y.Z/` with release notes
5. **Production**: Mark as current version in documentation
6. **Archive**: Move superseded versions to appropriate legacy sections

### **Documentation Versioning**

**Version-Specific Documentation**:
- Each version folder contains its own `README.md`
- Release notes in `RELEASES/vX.Y.Z/RELEASE_NOTES_vX.Y.Z.md`
- Changelog files for tracking detailed changes

---

## 🏆 **Best Practices**

### **Version Management**

1. **Always maintain version-specific folders** for active development
2. **Create comprehensive release notes** for each version
3. **Test thoroughly** before version promotion
4. **Document breaking changes** clearly
5. **Archive old versions** but keep accessible

### **File Organization**

1. **Use version-specific folders** for development
2. **Include version in release filenames** for clarity
3. **Group related files** in version folders
4. **Maintain clear folder hierarchy**
5. **Document changes** in version-specific READMEs

### **Release Process**

1. **Development testing** in version folder
2. **Version number assignment** following SemVer
3. **Release notes creation** with feature highlights
4. **Release folder creation** with all components
5. **Documentation updates** across all relevant files

---

## 📞 **Version Support Policy**

### **Support Levels**

- **Current Version (v5.0.0)**: ✅ **Full support, active development**
- **Development Version (v6.0.0)**: 🧪 **Testing, experimental features**
- **Released Version (v3.0.0)**: ✅ **Maintenance, critical bug fixes**
- **Previous Major (v2.x.x)**: ⚠️ **Limited support, security fixes only**
- **Legacy (v1.x.x)**: 📁 **Archived, reference only**

### **Migration Paths**

- **v4.0.0 → v5.0.0**: ElevenLabs voice + Ken Burns upgrade
- **v3.0.0 → v5.0.0**: Voice provider change + animation upgrade
- **v2.1.0 → v5.0.0**: Complete system upgrade with new features
- **Legacy → v5.0.0**: Full migration to current system

---

## 🚀 **Future Version Management**

### **Planned Development**

**v5.1.0 (Minor Release)**:
- Additional motion effects
- Enhanced voice options
- Multi-scene templates (5, 10, 20 scenes)

**v5.0.1 (Patch Release)**:
- Bug fixes
- Documentation improvements
- Performance optimizations

**v6.0.0 (Major Release)**:
- Advanced AI integration
- New animation systems
- Breaking architectural changes

### **📋 Complete Step-by-Step Guide**
For detailed instructions on creating new versions, see:
**👉 `FUTURE_VERSION_MANAGEMENT.md`** - Complete guide with templates and examples

### **⚡ Quick Version Creation Process**
1. **Create version folder**: `mkdir "Version X - Feature Name"`
2. **Develop in version folder**: Work on new features
3. **Document thoroughly**: Update version README
4. **Test completely**: Validate all functionality
5. **Create release**: Package into `RELEASES/vX.Y.Z/`
6. **Update main docs**: Reflect new current version

### **🔧 Practical Release Commands**
```bash
# Example: Creating v5.1.0 release
mkdir RELEASES/v5.1.0

# Copy version files with proper naming
copy "Version 5 - ElevenLabs Single Scene\Templatev5" "RELEASES\v5.1.0\ElevenLabs-Template-v5.1.0.json"
copy "Version 5 - ElevenLabs Single Scene\Workflowv5_2scene" "RELEASES\v5.1.0\ElevenLabs-Workflow-v5.1.0.json"

# Create release documentation
notepad RELEASES\v5.1.0\RELEASE_NOTES_v5.1.0.md
```

### **🎯 Next Version Roadmap**
- **v5.1.0**: Enhanced motion effects, multi-scene support
- **v5.0.1**: Bug fixes, performance improvements  
- **v6.0.0**: Next-generation AI integration, advanced features

---

**📋 RESOURCES**: 
- `Version 5 - ElevenLabs Single Scene/README.md` - Current version documentation
- `FUTURE_VERSION_MANAGEMENT.md` - Detailed version creation guide
- `FOLDER_STRUCTURE_GUIDE.md` - Navigation and organization
- `RELEASES/` folder - All version releases and documentation 