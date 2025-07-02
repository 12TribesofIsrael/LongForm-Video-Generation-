# 🔌 Frontend-Backend Integration Guide
## **LongForm Video Generation Platform**

> **Complete Integration Guide for Beginners**  
> Step-by-step documentation for connecting your Bolt.ai frontend to the LongForm backend system

![Integration](https://img.shields.io/badge/Integration-Frontend%20to%20Backend-blue)
![Complexity](https://img.shields.io/badge/Complexity-Beginner%20Friendly-green)
![Timeline](https://img.shields.io/badge/Timeline-3%20Phases-orange)

**📋 Document Version**: `v1.0.0`  
**🔄 Created**: December 25, 2024  
**🎯 Target Audience**: Beginners to Intermediate  
**⏱️ Total Setup Time**: 4-6 hours (across 3 phases)

---

## 🎯 **Integration Overview**

Your system has these components:
- **Frontend**: Bolt.ai UI hosted on Netlify (`https://superb-brioche-7a2e90.netlify.app/`)
- **Backend**: n8n workflows + Python scripts + API integrations
- **Output**: Professional video generation system

**Integration Goal**: Connect frontend form submissions to trigger your backend video generation workflows.

---

## 📋 **Prerequisites Checklist**

Before starting, ensure you have:
- ✅ **VPS Account** (DigitalOcean, Linode, or Vultr recommended)
- ✅ **Domain Name** (optional but recommended)
- ✅ **API Keys**:
  - Perplexity AI API key
  - JSON2Video API key
  - Azure Cognitive Services (for voice)
- ✅ **Basic SSH knowledge** (we'll guide you through)
- ✅ **Your frontend source code** (from Bolt.ai)

---

## 🎯 **Three-Phase Integration Strategy**

### **Phase 1: Infrastructure Setup** ⏱️ *2-3 hours*
- Set up VPS server
- Install and configure n8n
- Test basic functionality

### **Phase 2: Backend Integration** ⏱️ *1-2 hours*
- Deploy your n8n workflows
- Configure API credentials
- Test video generation pipeline

### **Phase 3: Frontend Connection** ⏱️ *1 hour*
- Connect frontend to backend APIs
- Implement error handling
- Deploy and test complete system

---

## 🚀 **Phase 1: Infrastructure Setup**

### **Step 1.1: VPS Server Setup**

#### **Choose Your VPS Provider**
**Recommended**: DigitalOcean (most beginner-friendly)
- **Plan**: $12/month Droplet (2GB RAM, 1 CPU)
- **OS**: Ubuntu 22.04 LTS
- **Location**: Choose closest to your users

#### **Create Server**
1. **Sign up** at DigitalOcean.com
2. **Create Droplet**:
   - **Image**: Ubuntu 22.04 LTS
   - **Plan**: Basic ($12/month)
   - **Authentication**: SSH Key (recommended) or Password
3. **Note your server IP address** (e.g., `123.456.789.012`)

### **Step 1.2: Initial Server Configuration**

#### **Connect to Your Server**
```bash
# Replace with your server IP
ssh root@123.456.789.012
```

#### **Update System**
```bash
# Update package lists
apt update && apt upgrade -y

# Install essential tools
apt install -y curl wget git unzip nginx certbot python3-certbot-nginx
```

#### **Create Non-Root User**
```bash
# Create user for n8n
adduser n8n
usermod -aG sudo n8n

# Switch to n8n user
su - n8n
```

### **Step 1.3: Install Node.js and n8n**

#### **Install Node.js**
```bash
# Install Node Version Manager
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload bash profile
source ~/.bashrc

# Install Node.js LTS
nvm install --lts
nvm use --lts
```

#### **Install n8n**
```bash
# Install n8n globally
npm install -g n8n

# Verify installation
n8n --version
```

### **Step 1.4: Configure n8n for Production**

#### **Create n8n Configuration**
```bash
# Create n8n directory
mkdir ~/.n8n
cd ~/.n8n

# Create environment file
nano .env
```

#### **Add Configuration** (in .env file):
```env
# Basic Configuration
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=YourSecurePassword123!

# External Access
N8N_HOST=0.0.0.0
N8N_PORT=5678
N8N_PROTOCOL=https
WEBHOOK_URL=https://yourdomain.com

# Security
N8N_SECURE_COOKIE=true
N8N_JWT_AUTH_ACTIVE=true
N8N_JWT_AUTH_HEADER=authorization

# File Storage (local for now)
N8N_DEFAULT_BINARY_DATA_MODE=filesystem
```

#### **Create Systemd Service**
```bash
# Create service file
sudo nano /etc/systemd/system/n8n.service
```

#### **Service Configuration**:
```ini
[Unit]
Description=n8n
After=network.target

[Service]
Type=simple
User=n8n
ExecStart=/home/n8n/.nvm/versions/node/v20.10.0/bin/n8n start
Restart=on-failure
RestartSec=5
Environment=PATH=/home/n8n/.nvm/versions/node/v20.10.0/bin:/usr/local/bin:/usr/bin:/bin
WorkingDirectory=/home/n8n
EnvironmentFile=/home/n8n/.n8n/.env

[Install]
WantedBy=multi-user.target
```

#### **Start n8n Service**
```bash
# Reload systemd
sudo systemctl daemon-reload

# Enable and start n8n
sudo systemctl enable n8n
sudo systemctl start n8n

# Check status
sudo systemctl status n8n
```

### **Step 1.5: Configure Nginx Reverse Proxy**

#### **Create Nginx Configuration**
```bash
sudo nano /etc/nginx/sites-available/n8n
```

#### **Nginx Configuration**:
```nginx
server {
    listen 80;
    server_name yourdomain.com;  # Replace with your domain

    location / {
        proxy_pass http://localhost:5678;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### **Enable Site and SSL**
```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/n8n /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Get SSL certificate (replace yourdomain.com)
sudo certbot --nginx -d yourdomain.com
```

### **Step 1.6: Test n8n Access**

1. **Open browser** to `https://yourdomain.com`
2. **Login** with credentials from .env file
3. **Verify** n8n interface loads correctly

---

## 🔧 **Phase 2: Backend Integration**

### **Step 2.1: Upload Your Workflows**

#### **Prepare Workflow Files**
On your local machine:
```bash
# Create deployment package
mkdir n8n-workflows
cp n8n/final.json n8n-workflows/
cp Final/FinalMaster.json n8n-workflows/
```

#### **Upload to Server**
```bash
# Upload workflows (from your local machine)
scp -r n8n-workflows/ n8n@123.456.789.012:/home/n8n/
```

### **Step 2.2: Import Workflows in n8n**

1. **Access n8n** at `https://yourdomain.com`
2. **Click "Import from File"**
3. **Upload** each .json workflow file
4. **Activate** workflows after import

### **Step 2.3: Configure API Credentials**

#### **In n8n Interface**:
1. **Go to Credentials** (left sidebar)
2. **Add New Credential** for each API:

#### **Perplexity AI Credential**:
- **Type**: HTTP Header Auth
- **Name**: Perplexity-API
- **Header Name**: Authorization
- **Header Value**: `Bearer YOUR_PERPLEXITY_API_KEY`

#### **JSON2Video Credential**:
- **Type**: HTTP Header Auth
- **Name**: Json2Video
- **Header Name**: x-api-key
- **Header Value**: `YOUR_JSON2VIDEO_API_KEY`

### **Step 2.4: Test Backend Workflows**

1. **Open** your imported workflow
2. **Click "Test Workflow"**
3. **Execute** with sample data
4. **Verify** video generation completes successfully

### **Step 2.5: Create Webhook Endpoints**

#### **Modify Workflow for Webhook Trigger**:
1. **Replace** Manual Trigger with Webhook Trigger
2. **Set Webhook Path**: `/api/generate-video`
3. **Configure** HTTP Response node
4. **Save and Activate** workflow

#### **Note the Webhook URL**:
```
https://yourdomain.com/webhook/api/generate-video
```

---

## 🌐 **Phase 3: Frontend Connection**

### **Step 3.1: Understand Frontend Structure**

#### **Identify Key Components**:
- **Form inputs**: Text area for content
- **Submit button**: Triggers video generation
- **Status display**: Shows progress/results
- **Results section**: Displays generated video

### **Step 3.2: Add Backend API Integration**

#### **Create API Service** (add to your frontend):
```javascript
// api.js - Add this to your frontend
class VideoGenerationAPI {
    constructor() {
        this.baseURL = 'https://yourdomain.com/webhook';
        this.timeout = 300000; // 5 minutes timeout
    }

    async generateVideo(textContent) {
        try {
            const response = await fetch(`${this.baseURL}/api/generate-video`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inputText: textContent
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    async checkVideoStatus(projectId) {
        try {
            const response = await fetch(`${this.baseURL}/api/video-status?project=${projectId}`);
            return await response.json();
        } catch (error) {
            console.error('Status check error:', error);
            throw error;
        }
    }
}

export default VideoGenerationAPI;
```

### **Step 3.3: Update Frontend Form Handler**

#### **Modify Form Submission**:
```javascript
// Update your form submit handler
import VideoGenerationAPI from './api.js';

const api = new VideoGenerationAPI();

async function handleSubmit(event) {
    event.preventDefault();
    
    const textContent = document.getElementById('textInput').value;
    const statusDiv = document.getElementById('status');
    const resultsDiv = document.getElementById('results');
    
    try {
        // Show loading state
        statusDiv.innerHTML = '🎬 Generating your video...';
        
        // Call backend API
        const result = await api.generateVideo(textContent);
        
        // Handle successful response
        statusDiv.innerHTML = '✅ Video generated successfully!';
        resultsDiv.innerHTML = `
            <h3>Your Video is Ready!</h3>
            <video controls>
                <source src="${result.videoUrl}" type="video/mp4">
            </video>
            <p><a href="${result.videoUrl}" download>Download Video</a></p>
        `;
        
    } catch (error) {
        // Handle errors
        statusDiv.innerHTML = '❌ Error generating video. Please try again.';
        console.error('Video generation failed:', error);
    }
}
```

### **Step 3.4: Add Progress Monitoring**

#### **Implement Status Polling**:
```javascript
// Add to your frontend for real-time updates
async function monitorVideoGeneration(projectId) {
    const statusDiv = document.getElementById('status');
    const pollInterval = 5000; // Check every 5 seconds
    
    const checkStatus = async () => {
        try {
            const status = await api.checkVideoStatus(projectId);
            
            switch(status.movie.status) {
                case 'running':
                    statusDiv.innerHTML = '🎬 Processing video... Please wait.';
                    setTimeout(checkStatus, pollInterval);
                    break;
                case 'done':
                    statusDiv.innerHTML = '✅ Video completed!';
                    displayResults(status.movie.url);
                    break;
                case 'error':
                    statusDiv.innerHTML = '❌ Video generation failed.';
                    break;
            }
        } catch (error) {
            console.error('Status check failed:', error);
            setTimeout(checkStatus, pollInterval);
        }
    };
    
    checkStatus();
}
```

### **Step 3.5: Deploy Frontend Updates**

#### **If using Netlify**:
1. **Update** your frontend code with API integration
2. **Build** your project
3. **Deploy** to Netlify via Git or manual upload
4. **Test** the complete flow

---

## 🔒 **Security Best Practices**

### **Server Security**
```bash
# Setup firewall
sudo ufw enable
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'

# Disable root login
sudo nano /etc/ssh/sshd_config
# Set: PermitRootLogin no
sudo systemctl restart sshd
```

### **API Security**
- ✅ Use HTTPS everywhere
- ✅ Implement rate limiting
- ✅ Validate all inputs
- ✅ Store API keys in environment variables
- ✅ Use authentication for sensitive endpoints

### **Backup Strategy**
```bash
# Daily backup script
#!/bin/bash
cd /home/n8n
tar -czf backup-$(date +%Y%m%d).tar.gz .n8n/
```

---

## 📊 **Testing & Validation**

### **System Health Checks**

#### **Backend Tests**:
```bash
# Check n8n service
sudo systemctl status n8n

# Check webhook endpoint
curl -X POST https://yourdomain.com/webhook/api/generate-video \
  -H "Content-Type: application/json" \
  -d '{"inputText": "Test content"}'
```

#### **Frontend Tests**:
1. **Form Submission**: Test with sample text
2. **Error Handling**: Test with invalid input
3. **Progress Updates**: Verify status polling works
4. **Results Display**: Confirm video displays correctly

### **Performance Monitoring**

#### **Server Monitoring**:
```bash
# Install monitoring tools
sudo apt install htop iotop

# Monitor resources
htop  # CPU and memory usage
iotop # Disk I/O
```

#### **API Response Times**:
- Expected: < 2 seconds for form submission
- Video generation: 2-5 minutes (normal)
- Status checks: < 1 second

---

## 🚨 **Troubleshooting Guide**

### **Common Issues**

#### **n8n Not Starting**:
```bash
# Check logs
sudo journalctl -u n8n -f

# Common fixes
sudo systemctl restart n8n
```

#### **Frontend Can't Connect**:
1. **Check CORS** settings in n8n
2. **Verify** webhook URLs are correct
3. **Test** API endpoints manually

#### **Video Generation Fails**:
1. **Check** API credentials in n8n
2. **Verify** account balances (Perplexity/JSON2Video)
3. **Review** workflow execution logs

### **Support Resources**
- **n8n Documentation**: docs.n8n.io
- **Your Workflows**: Check workflow execution history
- **API Status**: Monitor API provider status pages

---

## 📈 **Scaling Considerations**

### **Traffic Growth**
- **Server Upgrade**: Monitor CPU/RAM usage
- **Database**: Consider PostgreSQL for n8n data
- **CDN**: Use Cloudflare for frontend caching

### **Cost Optimization**
- **API Usage**: Monitor monthly costs
- **Server Resources**: Scale based on demand
- **Backup Storage**: Implement retention policies

---

## 🎯 **Next Steps**

### **Immediate (Week 1)**
1. ✅ Complete Phase 1: Infrastructure
2. ✅ Test basic n8n functionality
3. ✅ Verify all APIs work

### **Short Term (Month 1)**
1. ✅ Full frontend integration
2. ✅ Production testing
3. ✅ User feedback collection

### **Long Term (Quarter 1)**
1. ✅ Performance optimization
2. ✅ Feature enhancements
3. ✅ User analytics implementation

---

## 📞 **Support & Resources**

### **Documentation References**
- **Project Overview**: `PROJECT_OVERVIEW.md`
- **Production Guide**: `PRODUCTION_USER_GUIDE.md`
- **System Architecture**: `SYSTEM_ARCHITECTURE.md`

### **Development Resources**
- **Testing**: `TESTING_STRATEGY.md`
- **Deployment**: `PRODUCTION_DEPLOYMENT_CHECKLIST.md`
- **Versioning**: `VERSIONING_STRATEGY.md`

---

**🎬 Ready to transform your text into professional videos!**  
Follow this guide step-by-step, and you'll have a fully integrated system in 4-6 hours. 