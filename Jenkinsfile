pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'cd app && npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Build Successful!'
            }
        }
    }
}