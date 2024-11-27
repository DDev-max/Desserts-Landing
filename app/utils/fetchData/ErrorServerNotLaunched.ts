export class ServerNotLaunched extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'ServerNotLaunched'
    }
}