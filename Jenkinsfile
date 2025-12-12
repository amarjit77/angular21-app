pipeline {
    agent any

    tools {
        nodejs "node18"    // Name of Node version configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Packages') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Angular') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Archive Files') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                echo "Deployment step here..."
            }
        }
    }

    triggers {
        githubPush()
    }
}