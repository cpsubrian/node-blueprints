# Blueprints

A command-lind node.js utility for creating and sharing project and file scaffolding.

## Work in progress .. Does not work yet ##

***

## blueprint.json ##
Each blueprint should contain a `blueprint.json` file that describes
what the blueprint does and why someone would want you use it. 

You can read all about the format in [JSON.md][https://github.com/cpsubrian/node-blueprints/blob/master/JSON.md].


## Namespaces ##
Each blueprint is required to specify a namespace.  There are a few reasons for this:

 1. Each blueprint needs a unique identifier, and `acme:express-mvc` makes more sense than 
    `acme-express-mvc`.
 2. It provides useful ways to browse blueprints, such as showing all blueprints under a
    single namespace.  (And in that view we can just print the `name`, so its shorter and
    easier to read).
 3. Default namespaces
    * The command-line utility allows you to sepcify cascading default namespaces.
    * `local` will always be searched first.
    * Then you could set some fallbacks such as `yourname` and `acme`.
    * From the command-line then `blueprints express-mvc` is the same as `blueprints acme:express-mvc`.
    * Common scaffolding you use for personal projects could use your personal namespace and
      short, easy to type names.
      * Example identifier: `yourlongnamespace:model`
      * Command-line usage: `blueprints model`
      * Much easier to type.
