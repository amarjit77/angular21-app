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
                bat 'xcopy /E /Y /I dist\\angular21-app "C:\\inetpub\\wwwroot\\angular21-app"'
            }
        }
    }

    triggers {
        githubPush()
    }
}