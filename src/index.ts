import cluster from 'cluster';
import os from 'os';
import app from '@src/app';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 8888;
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    // Create new worker
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    // Handle exit event when worker is kicked, root cause is throw exception without catch exception
    cluster.on('exit', (worker: cluster.Worker, code: number, signal: string) => {
        console.log(`worker ${worker.process.pid} died - code ${code} - signal ${signal}`);
    });
} else {
    // Run api
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
    console.log(`Worker ${process.pid} started`);
}