declare module "lodash" {
    /**
     * Gets the first element of 'array'.
     * 
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of 'array'.
     * @see last
     * @example
     * 
     * head([1,2,3])
     * // => 1
     * 
     * head([])
     * //=> undefined
     */
    function head(array:Array<Object>): Array<Object>[0];

    function hasIn(object:Object, key:string): boolean;
    function isBoolean(value:any): boolean;
    function toString(value:any): string;
    function split(string:string, separator:RegExp|string, limit:number): Array<string>;
    function hasPath(object:Object, path:Array<string>|string): boolean;
    // function filter(array:[{key:string, value:any},{key:string, value:boolean}], predicate:Function): Array<string>;
    // function filter(array:Array<Map<string,string>|Map<string,boolean>>, predicate:Function): Array<string>;
    function filter(array:[{key:string, value:any},{key:string, value:boolean}], predicate:Function): [string];
    function every(array:[any], predicate:Function): boolean;
    function map(array:Array<Map<number,number>>, iteratee:Function): Array<Map<number,number>>;
    }