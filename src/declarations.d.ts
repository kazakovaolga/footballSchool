declare module "*.jpg"
declare module "*.png"
declare module "*.gif"
declare module "*.js"
declare module "*.scss" {
    const content: {[key: string]: any};
    export = content
}