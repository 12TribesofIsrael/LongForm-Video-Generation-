# Legacy Workflows Archive

This directory contains legacy workflow files that have been superseded by the production workflow but are kept for historical reference.

## Archived Files:

### **master2.json**
- **Description**: Legacy version of the long-form workflow
- **Status**: Superseded by FinalMaster.json
- **Date Archived**: December 25, 2025

### **master2_backup.json**
- **Description**: Backup of legacy master2 workflow
- **Status**: Superseded by FinalMaster.json
- **Date Archived**: December 25, 2025

### **Master_Long_Form.json**
- **Description**: Early development version of long-form workflow
- **Status**: Superseded by FinalMaster.json
- **Date Archived**: December 25, 2025

### **Top_10_Videos.json**
- **Description**: Original workflow for Top 10 video format (different use case)
- **Status**: Different template/format, kept for reference
- **Date Archived**: December 25, 2025

## Version 6 Archive (December 27, 2025):

### **Version_6_Archive/Version6n8n.json**
- **Description**: Version 6 workflow - 20-scene system without ElevenLabs
- **Features**: Basic 20-scene video generation, Perplexity AI integration
- **Status**: ❌ **Superseded by v5.1.0 ElevenLabs Production System**
- **Missing**: ElevenLabs voice synthesis, Ken Burns effects, motion animation
- **Size**: 23KB, 456 lines
- **Date Archived**: December 27, 2025
- **Reason**: Inferior to v5.1.0 - lacks voice synthesis and animation features

### **Version_6_Archive/Version6Template.json**
- **Description**: Version 6 template - Basic 20-scene JSON2Video template
- **Features**: 20 scenes, basic image generation, text overlay
- **Status**: ❌ **Superseded by v5.1.0 ElevenLabs Template**
- **Missing**: Motion variables, Ken Burns effects, ElevenLabs configuration
- **Size**: 20KB, 553 lines (vs 32KB v5.1.0 template)
- **Date Archived**: December 27, 2025
- **Reason**: Missing advanced features - no animation, smaller feature set

## Current Production Files:

- **Production**: `RELEASES/v5.1.0/ElevenLabs-Workflow-v5.1.0.json` ✅ **ACTIVE**
- **Template**: `RELEASES/v5.1.0/ElevenLabs-Template-v5.1.0.json` ✅ **ACTIVE**
- **Features**: 20-scene ElevenLabs voice, Ken Burns effects, 240+ variables
- **Performance**: 12-20 minute videos, $1.27 per video, professional quality

## Archive Policy:

These files are kept for:
- Historical reference
- Potential feature extraction
- Development pattern analysis
- Rollback capability if needed

**Safe to delete after 6+ months if storage is needed.**

## Version Evolution Timeline:

```
Legacy Workflows (2024-2025)
├── Master_Long_Form.json (Early development)
├── master2.json + master2_backup.json (Legacy versions)
├── Top_10_Videos.json (Different format)
└── Version 6 (December 2025)
    ├── Version6n8n.json (20-scene basic)
    └── Version6Template.json (No ElevenLabs/animation)
        ↓
Current Production (v5.1.0 - December 2025)
├── ElevenLabs-Workflow-v5.1.0.json ✅ ACTIVE
└── ElevenLabs-Template-v5.1.0.json ✅ ACTIVE
    (Revolutionary 20-scene + ElevenLabs + Ken Burns system)
```

**Note**: Version 6 was archived despite having "6" in the name because it lacks the advanced ElevenLabs and animation features that make v5.1.0 the superior production system. 