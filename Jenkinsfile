pipeline {
    agent any

    environment {
        NODEJS_HOME = '/usr/local/bin/node' // Adjust path based on your Jenkins server
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
        ALLURE_HOME = '/usr/local/allure'   // Adjust path to Allure CLI installation
    }

    options {
        ansiColor('xterm')
        timeout(time: 2, unit: 'HOURS')
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/yourusername/orangehrm-automation.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests with Allure') {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    sh 'npx playwright test --reporter=json --output=allure-results'
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh "${ALLURE_HOME}/bin/allure generate allure-results -o allure-report --clean"
                archiveArtifacts artifacts: 'allure-report/**, allure-results/**', fingerprint: true, allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
        }
        success {
            echo 'Build and tests completed successfully!'
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        }
        failure {
            echo 'Build or tests failed!'
        }
    }
}