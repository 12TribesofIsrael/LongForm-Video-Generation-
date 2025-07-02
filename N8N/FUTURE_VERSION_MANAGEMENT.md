# 🚀 Future Version Management Guide

**📋 Document Version**: `v2.1.0`  
**🔄 Last Updated**: January 2, 2025  
**🎯 Purpose**: Step-by-step guide for creating and managing future versions

---

## 🎯 **Quick Reference - Creating New Versions**

### **⚡ Fast Track Process**
```bash
# 1. Create new release folder
mkdir RELEASES/v3.1.0

# 2. Copy and rename your files
copy YourWorkflow.json RELEASES/v3.1.0/ComponentName-v3.1.0.json
copy YourTemplate.json RELEASES/v3.1.0/ComponentTemplate-v3.1.0.json

# 3. Create release notes (see template below)
# 4. Update main documentation with new version references
# 5. Test the new version thoroughly
```

---

## 📋 **Complete Version Management Process**

### **Step 1: Determine Version Number**

#### **🔢 Version Number Decision Tree**
```
Are there breaking changes or major new features?
├── YES: Increment MAJOR version (v3.0.0 → v4.0.0)
└── NO: Are there new features or enhancements?
    ├── YES: Increment MINOR version (v3.0.0 → v3.1.0)
    └── NO: Are there bug fixes or documentation updates?
        └── YES: Increment PATCH version (v3.0.0 → v3.0.1)
```

#### **📊 Examples**
- **v3.0.0 → v4.0.0**: New AI model, different template structure
- **v3.0.0 → v3.1.0**: Added batch processing, new scene types
- **v3.0.0 → v3.0.1**: Fixed caption bug, updated documentation

---

### **Step 2: Create Release Structure**

#### **🗂️ Required Folder Structure**
```bash
# Create new version folder
mkdir RELEASES/v{NEW_VERSION}

# Example for v3.1.0
mkdir RELEASES/v3.1.0
```

#### **📁 Required Files in Each Release**
```
RELEASES/v3.1.0/
├── {Component}-Workflow-v3.1.0.json    # Main workflow file
├── {Component}-Template-v3.1.0.json    # JSON2Video template
├── RELEASE_NOTES_v3.1.0.md             # Complete release documentation
└── CHANGELOG_v3.1.0.md                 # Optional: Detailed changes
```

---

### **Step 3: File Naming & Organization**

#### **🏷️ File Naming Templates**

**For Black Hebrew Israelite Workflows**:
```bash
# Workflow
BHI-Workflow-v{VERSION}.json

# Template  
BHI-Template-v{VERSION}.json

# Example
BHI-Workflow-v3.1.0.json
BHI-Template-v3.1.0.json
```

**For Bible Chapter Generator**:
```bash
# Workflow
BibleChapterMaster-v{VERSION}.json

# Template
BibleChapterTemplate-v{VERSION}.json

# Example
BibleChapterMaster-v2.2.0.json
BibleChapterTemplate-v2.2.0.json
```

**For Scale Video Generator**:
```bash
# Workflow
ScaleMaster-v{VERSION}.json

# Template
ScaleTemplate-v{VERSION}.json

# Example
ScaleMaster-v1.3.0.json
ScaleTemplate-v1.3.0.json
```

#### **📂 Copy Commands**
```bash
# Copy your current working files to versioned releases
copy "Bible_Chapter_Videos\BibleChapterMaster.json" "RELEASES\v2.2.0\BibleChapterMaster-v2.2.0.json"

copy "Versions\YourLatestWorkflow.json" "RELEASES\v3.1.0\BHI-Workflow-v3.1.0.json"

copy "scale\ScaleMaster.json" "RELEASES\v1.3.0\ScaleMaster-v1.3.0.json"
```

---

### **Step 4: Create Release Documentation**

#### **📝 Release Notes Template**
```markdown
# 🎬 Release Notes - v{VERSION}

## 🏷️ **{Component Name} - {Release Type}**

**Release Date**: {Date}  
**Version**: v{MAJOR.MINOR.PATCH}  
**Type**: {Major/Minor/Patch} Release  
**Focus**: {Brief description}

---

## 🎯 **Release Highlights**

### **🔥 New Features**
- ✅ Feature 1: Description
- ✅ Feature 2: Description

### **🛠️ Technical Improvements**
- ✅ Improvement 1: Description
- ✅ Improvement 2: Description

### **🐛 Bug Fixes**
- ✅ Fixed: Issue description
- ✅ Resolved: Problem description

---

## 🔄 **Breaking Changes** (if any)

### **⚠️ Migration Required**
1. Change 1: What needs to be updated
2. Change 2: Configuration changes

---

## 🚀 **Upgrade Instructions**

### **Step 1: Backup Current System**
```bash
copy CurrentWorkflow.json CurrentWorkflow-backup.json
```

### **Step 2: Import New Version**
1. Download `{Component}-Workflow-v{VERSION}.json`
2. Import into n8n
3. Configure credentials

### **Step 3: Test**
1. Run sample content
2. Verify output quality
3. Confirm functionality

---

**🏆 RELEASE SUMMARY**: Brief summary of what this version achieves
```

#### **📋 Release Notes Example File**
```bash
# Create release notes file
notepad RELEASES/v3.1.0/RELEASE_NOTES_v3.1.0.md
```

---

### **Step 5: Update Main Documentation**

#### **📚 Files to Update with New Version Info**

**1. Main README.md**
```markdown
![Version](https://img.shields.io/badge/Version-v3.1.0-blue)

**📋 Document Version**: `v3.1.0`  
**🔄 Last Updated**: {Current Date}
```

**2. Component README files**
```markdown
**⚡ Latest Release**: See `RELEASES/v3.1.0/` for newest version
```

**3. VERSIONING_STRATEGY.md**
```markdown
### **Current Component Versions**

| Component | Version | Status | Last Updated |
|-----------|---------|--------|--------------|
| **Your Component** | `v3.1.0` | ✅ Latest | {Date} |
```

---

### **Step 6: Testing & Validation**

#### **🧪 Pre-Release Testing Checklist**
- [ ] **Import Test**: Workflow imports without errors
- [ ] **Functionality Test**: All features work as expected
- [ ] **Compatibility Test**: Works with existing templates/credentials
- [ ] **Performance Test**: Processing times within acceptable ranges
- [ ] **Quality Test**: Output meets quality standards
- [ ] **Documentation Test**: All guides are accurate and complete

#### **🎯 Validation Commands**
```bash
# Test workflow import (manual in n8n)
# Test with sample content
# Verify all API connections work
```

---

### **Step 7: Release Deployment**

#### **📦 Final Release Package**
```
RELEASES/v3.1.0/
├── ✅ BHI-Workflow-v3.1.0.json        # Tested workflow
├── ✅ BHI-Template-v3.1.0.json        # Validated template  
├── ✅ RELEASE_NOTES_v3.1.0.md         # Complete documentation
└── ✅ Updated main documentation       # Version references updated
```

#### **🚀 Release Announcement**
```markdown
# 🎊 New Release: v3.1.0

**What's New**: Brief highlight of main features
**Download**: `RELEASES/v3.1.0/`
**Documentation**: `RELEASE_NOTES_v3.1.0.md`
**Upgrade Guide**: See release notes for step-by-step instructions
```

---

## 🔄 **Version Lifecycle Management**

### **📊 Version Status Tracking**

| Status | Description | Action Required |
|--------|-------------|-----------------|
| ✅ **Active** | Current development version | Full support, active development |
| 🔧 **Maintenance** | Previous major version | Bug fixes, security updates |
| ⚠️ **Legacy** | Older supported version | Critical fixes only |
| 📁 **Archived** | End of life | No support, reference only |

### **🔄 Version Promotion Process**
```
Development → Testing → Staging → Release → Production → Archive
     ↓           ↓         ↓         ↓         ↓         ↓
Experimental   Testing   Staging   RELEASES  Current   Archive
  folder      folder    folder    folder    version   folder
```

---

## 🛠️ **Advanced Version Management**

### **🔀 Branch Management Strategy**

**For Major Development**:
```
v3.0.0 (stable) 
    ├── v3.1.0-dev (new features)
    ├── v3.0.1-hotfix (critical fixes)
    └── v4.0.0-experimental (breaking changes)
```

### **📦 Automated Version Creation**

**PowerShell Script Template**:
```powershell
# create-version.ps1
param(
    [string]$Component,
    [string]$Version,
    [string]$SourceWorkflow,
    [string]$SourceTemplate
)

# Create folder
New-Item -Path "RELEASES\v$Version" -ItemType Directory -Force

# Copy files with versioning
Copy-Item $SourceWorkflow "RELEASES\v$Version\$Component-Workflow-v$Version.json"
Copy-Item $SourceTemplate "RELEASES\v$Version\$Component-Template-v$Version.json"

# Create release notes template
$releaseNotes = @"
# 🎬 Release Notes - v$Version
# TODO: Fill in release details
"@
$releaseNotes | Out-File "RELEASES\v$Version\RELEASE_NOTES_v$Version.md"

Write-Host "✅ Version v$Version created successfully!"
```

**Usage**:
```bash
powershell -File create-version.ps1 -Component "BHI" -Version "3.1.0" -SourceWorkflow "Versions\Latest.json" -SourceTemplate "Versions\Template.json"
```

---

## 📞 **Troubleshooting Version Management**

### **🐛 Common Issues**

**Issue**: Version folder already exists
**Solution**: Check if you're incrementing version correctly, or archive the existing version

**Issue**: File naming inconsistency  
**Solution**: Follow the naming convention guide exactly

**Issue**: Missing release notes
**Solution**: Use the template provided above

**Issue**: Documentation not updated
**Solution**: Follow Step 5 checklist for all files to update

---

## 🎊 **Future Version Planning**

### **🗓️ Suggested Version Roadmap Template**

| Version | Target Date | Focus | Key Features |
|---------|-------------|-------|--------------|
| v3.1.0 | Next Month | Enhancement | New scene types, better prompts |
| v3.2.0 | 2 Months | Features | Batch processing, scheduling |
| v4.0.0 | 3 Months | Major Update | New AI model, redesigned templates |

### **📋 Version Planning Checklist**
- [ ] Define clear objectives for each version
- [ ] Estimate development time requirements  
- [ ] Plan testing and validation phases
- [ ] Schedule documentation updates
- [ ] Communicate timeline to users/team

---

**🏆 SUMMARY**: This guide provides everything you need to create, manage, and deploy future versions professionally. Follow these steps for consistent, reliable version management that scales with your project growth.** 