pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Repository cloned successfully!'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t cloud-app .'
            }
        }

        stage('Success') {
            steps {
                echo 'Docker Image Built Successfully!'
            }
        }

    }
}