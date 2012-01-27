# blueprint.json #

Every blueprint should have a `blueprint.json` file.

***

## Example blueprint.json ##

    {
        "namespace": "acme"
      , "name": "express-mvc"
      , "title": "MVC Express Webserver"
      , "description": "An MVC-style webserver, with controllers for routing and models for domain logic."
      , "version": "1.0.2"
      , "languages": ["js", "htmls", "css"]
      , "platforms": ["node.js"]
      , "tags": ["express", "mvc", "amazing"]
      , "delimeters": {
	        "start": "|["
	      , "end": "]|"
		  }
    }

***

## Available options: ##

### namespace ###
*Required* - 
The namespace of the blueprint.

`namespace` + `name` should form a unique pairing.

Can only contain alpha-numeric characters plus `_` and `-`.


### name  ###
*Required* - 
The machine name of the blueprint.

`namespace` + `name` should form a unique pairing.

Can only contain alpha-numeric characters plus `_` and `-`.


### title  ###
*Optional* - 
A human-readable title for the blueprint.


### description  ###
*Optional* - 
A human friendly description about what your blueprint does, and why someone would want to use it.


### version  ###
*Required* - 
A semver version number.


### languages  ###
*Optional* - 
Which programming languages the blueprint utilizes.

Examples: `js`, `css`, `html`, `php`, `ruby`


### platforms  ###
*Optional* - 
Which platform the blueprint targets.

Examples: `node.js`, `rails`, `drupal`, `django`


### tags  ###
*Optional* - 
Arbitraty tags to categorize your blueprint for better search results.


### delimeter  ###
*Optional* - 
The delimeter to use for escaping blueprint variables.  Defaults to `|[` and `]|`.

Blueprints does not use the standard `{{ }}` mustaches to avoid collisions with actual
templates in your projects.
