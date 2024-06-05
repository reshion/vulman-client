# Swagger Codegen

## typescript-angular options

CONFIG OPTIONS

sortParamsByRequiredFlag
        Sort method arguments to place required parameters before optional parameters. (Default: true)

ensureUniqueParams
        Whether to ensure parameter names are unique in an operation (rename parameters that are not). (Default: true)

allowUnicodeIdentifiers
        boolean, toggles whether unicode identifiers are allowed in names or not, default is false (Default: false)

modelPropertyNaming
        Naming convention for the property: 'camelCase', 'PascalCase', 'snake_case' and 'original', which keeps the original name (Default: camelCase)

supportsES6
        Generate code that conforms to ES6. (Default: false)

npmName
        The name under which you want to publish generated npm package

npmVersion
        The version of your npm package

npmRepository
        Use this property to set an url your private npmRepo in the package.json

snapshot
        When setting this property to true the version will be suffixed with -SNAPSHOT.yyyyMMddHHmm (Default: false)

withInterfaces
        Setting this property to true will generate interfaces next to the default class implementations. (Default: false)

ngVersion
        The version of Angular. Default is '4.3'

providedInRoot
        Use this property to provide Injectables in root (it is only valid in angular version greater or equal to 6.0.0). (Default: false)

# Openapi Generator

## Typescript Angular config options
[docs](https://openapi-generator.tech/docs/generators/typescript-angular/)

## Some Commands


<table><thead><tr><th>Option</th><th>Description</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td>allowUnicodeIdentifiers</td><td>boolean, toggles whether unicode identifiers are allowed in names or not, default is false</td><td></td><td>false</td></tr><tr><td>apiModulePrefix</td><td>The prefix of the generated ApiModule.</td><td></td><td>null</td></tr><tr><td>configurationPrefix</td><td>The prefix of the generated Configuration.</td><td></td><td>null</td></tr><tr><td>disallowAdditionalPropertiesIfNotPresent</td><td>If false, the 'additionalProperties' implementation (set to true by default) is compliant with the OAS and JSON schema specifications. If true (default), keep the old (incorrect) behaviour that 'additionalProperties' is set to false by default.</td><td><dl><dt><strong>false</strong></dt><dd>The 'additionalProperties' implementation is compliant with the OAS and JSON schema specifications.</dd><dt><strong>true</strong></dt><dd>Keep the old (incorrect) behaviour that 'additionalProperties' is set to false by default.</dd></dl></td><td>true</td></tr><tr><td>ensureUniqueParams</td><td>Whether to ensure parameter names are unique in an operation (rename parameters that are not).</td><td></td><td>true</td></tr><tr><td>enumNameSuffix</td><td>Suffix that will be appended to all enum names.</td><td></td><td>Enum</td></tr><tr><td>enumPropertyNaming</td><td>Naming convention for enum properties: 'camelCase', 'PascalCase', 'snake_case', 'UPPERCASE', and 'original'</td><td></td><td>PascalCase</td></tr><tr><td>fileNaming</td><td>Naming convention for the output files: 'camelCase', 'kebab-case'.</td><td></td><td>camelCase</td></tr><tr><td>legacyDiscriminatorBehavior</td><td>Set to false for generators with better support for discriminators. (Python, Java, Go, PowerShell, C#have this enabled by default).</td><td><dl><dt><strong>true</strong></dt><dd>The mapping in the discriminator includes descendent schemas that allOf inherit from self and the discriminator mapping schemas in the OAS document.</dd><dt><strong>false</strong></dt><dd>The mapping in the discriminator includes any descendent schemas that allOf inherit from self, any oneOf schemas, any anyOf schemas, any x-discriminator-values, and the discriminator mapping schemas in the OAS document AND Codegen validates that oneOf and anyOf schemas contain the required discriminator and throws an error if the discriminator is missing.</dd></dl></td><td>true</td></tr><tr><td>modelFileSuffix</td><td>The suffix of the file of the generated model (model&lt;suffix&gt;.ts).</td><td></td><td>null</td></tr><tr><td>modelPropertyNaming</td><td>Naming convention for the property: 'camelCase', 'PascalCase', 'snake_case' and 'original', which keeps the original name. Only change it if you provide your own run-time code for (de-)serialization of models</td><td></td><td>original</td></tr><tr><td>modelSuffix</td><td>The suffix of the generated model.</td><td></td><td>null</td></tr><tr><td>ngVersion</td><td>The version of Angular. (At least 6.0.0)</td><td></td><td>12.0.0</td></tr><tr><td>npmName</td><td>The name under which you want to publish generated npm package. Required to generate a full package</td><td></td><td>null</td></tr><tr><td>npmRepository</td><td>Use this property to set an url your private npmRepo in the package.json</td><td></td><td>null</td></tr><tr><td>npmVersion</td><td>The version of your npm package. If not provided, using the version from the OpenAPI specification file.</td><td></td><td>1.0.0</td></tr><tr><td>nullSafeAdditionalProps</td><td>Set to make additional properties types declare that their indexer may return undefined</td><td></td><td>false</td></tr><tr><td>paramNaming</td><td>Naming convention for parameters: 'camelCase', 'PascalCase', 'snake_case' and 'original', which keeps the original name</td><td></td><td>camelCase</td></tr><tr><td>prependFormOrBodyParameters</td><td>Add form or body parameters to the beginning of the parameter list.</td><td></td><td>false</td></tr><tr><td>providedIn</td><td>Use this property to provide Injectables in wanted level (it is only valid in angular version greater or equal to 9.0.0).</td><td><dl><dt><strong>root</strong></dt><dd>The application-level injector in most apps.</dd><dt><strong>none</strong></dt><dd>No providedIn (same as providedInRoot=false)</dd><dt><strong>any</strong></dt><dd>Provides a unique instance in each lazy loaded module while all eagerly loaded modules share one instance.</dd><dt><strong>platform</strong></dt><dd>A special singleton platform injector shared by all applications on the page.</dd></dl></td><td>root</td></tr><tr><td>providedInRoot</td><td>Use this property to provide Injectables in root (it is only valid in angular version greater or equal to 6.0.0). IMPORTANT: Deprecated for angular version greater or equal to 9.0.0, use <strong>providedIn</strong> instead.</td><td></td><td>false</td></tr><tr><td>queryParamObjectFormat</td><td>The format for query param objects: 'dot', 'json', 'key'.</td><td></td><td>dot</td></tr><tr><td>serviceFileSuffix</td><td>The suffix of the file of the generated service (service&lt;suffix&gt;.ts).</td><td></td><td>.service</td></tr><tr><td>serviceSuffix</td><td>The suffix of the generated service.</td><td></td><td>Service</td></tr><tr><td>snapshot</td><td>When setting this property to true, the version will be suffixed with -SNAPSHOT.yyyyMMddHHmm</td><td></td><td>false</td></tr><tr><td>sortModelPropertiesByRequiredFlag</td><td>Sort model properties to place required parameters before optional parameters.</td><td></td><td>true</td></tr><tr><td>sortParamsByRequiredFlag</td><td>Sort method arguments to place required parameters before optional parameters.</td><td></td><td>true</td></tr><tr><td>stringEnums</td><td>Generate string enums instead of objects for enum values.</td><td></td><td>false</td></tr><tr><td>supportsES6</td><td>Generate code that conforms to ES6.</td><td></td><td>false</td></tr><tr><td>taggedUnions</td><td>Use discriminators to create tagged unions instead of extending interfaces.</td><td></td><td>false</td></tr><tr><td>useSingleRequestParameter</td><td>Setting this property to true will generate functions with a single argument containing all API endpoint parameters instead of one argument per parameter.</td><td></td><td>false</td></tr><tr><td>withInterfaces</td><td>Setting this property to true will generate interfaces next to the default class implementations.</td><td></td><td>false</td></tr></tbody></table>


[docs](https://github.com/OpenAPITools/openapi-generator)

## Usage 
```
java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate \
  -i https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml \
  -g java \
  -t modules/openapi-generator/src/main/resources/Java \
  --additional-properties artifactId=petstore-okhttp-gson,hideGenerationTimestamp:true \
  -o samples/client/petstore/java/okhttp-gson
``` 

## Some options to help

```
NAME
        openapi-generator-cli generate - Generate code with the specified
        generator.

SYNOPSIS
        openapi-generator-cli generate
                [(-a <authorization> | --auth <authorization>)]
                [--api-name-suffix <api name suffix>] [--api-package <api package>]
                [--artifact-id <artifact id>] [--artifact-version <artifact version>]
                [(-c <configuration file> | --config <configuration file>)] [--dry-run]
                [(-e <templating engine> | --engine <templating engine>)]
                [--enable-post-process-file]
                [(-g <generator name> | --generator-name <generator name>)]
                [--generate-alias-as-model] [--git-host <git host>]
                [--git-repo-id <git repo id>] [--git-user-id <git user id>]
                [--global-property <global properties>...] [--group-id <group id>]
                [--http-user-agent <http user agent>]
                [(-i <spec file> | --input-spec <spec file>)]
                [--ignore-file-override <ignore file override location>]
                [--import-mappings <import mappings>...]
                [--instantiation-types <instantiation types>...]
                [--invoker-package <invoker package>]
                [--language-specific-primitives <language specific primitives>...]
                [--legacy-discriminator-behavior] [--library <library>]
                [--log-to-stderr] [--minimal-update]
                [--model-name-prefix <model name prefix>]
                [--model-name-suffix <model name suffix>]
                [--model-package <model package>]
                [(-o <output directory> | --output <output directory>)] [(-p <additional properties> | --additional-properties <additional properties>)...]
                [--package-name <package name>] [--release-note <release note>]
                [--remove-operation-id-prefix]
                [--reserved-words-mappings <reserved word mappings>...]
                [(-s | --skip-overwrite)] [--server-variables <server variables>...]
                [--skip-validate-spec] [--strict-spec <true/false strict behavior>]
                [(-t <template directory> | --template-dir <template directory>)]
                [--type-mappings <type mappings>...] [(-v | --verbose)]

OPTIONS
        -a <authorization>, --auth <authorization>
            adds authorization headers when fetching the OpenAPI definitions
            remotely. Pass in a URL-encoded string of name:header with a comma
            separating multiple values

...... (results omitted)

        -v, --verbose
            verbose mode
´´´