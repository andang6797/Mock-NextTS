pipeline {
    agent any
    stages {
        stage('Clone from git') {
            steps {
                echo 'Connect git'
                git branch: 'main', url: 'https://github.com/andang6797/Mock-NextTS.git'
            }
        }
        stage('Test ') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Build') {
            steps {
                echo 'Building....'
                sh 'npm run build'
                echo 'build Success'
            }
        }
    }
}