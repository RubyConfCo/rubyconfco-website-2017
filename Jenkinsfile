#!groovy

node {
   stage 'Checkout'
        checkout scm

   stage 'Docker setup'
        sh 'docker-compose build'
        sh 'docker-compose run --rm node rm -Rf public'
        sh 'docker-compose run --rm node rm -Rf node_modules'
        sh 'docker-compose run --rm node npm run docker-prepare'

   stage 'Test'
        sh 'echo "where are my tests :("'
        sh 'docker-compose run --rm node npm run env'
        sh 'docker-compose run --rm node npm run test'
        sh 'docker-compose run --rm node npm run build'

   stage 'Deploy'
        if (env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'test_version' || env.BRANCH_NAME == 'centrumpi' || env.BRANCH_NAME == 'centrumpi_test'){
            sh 'cd public &&  zip -r ../${BUILD_TAG}.zip . && cd .. && scp ${BUILD_TAG}.zip monoku@45.79.203.75:/home/monoku/webapps/monoku/new/public/public/files/'
            sh 'curl -X POST -H \'Content-type: application/json\' --data \'{"text":"Nuevo build http://monoku.com/public/files/\'${BUILD_TAG}\'.zip"}\' https://hooks.slack.com/services/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'
            sh 'rm -Rf ${BUILD_TAG}.zip'
        }
}
