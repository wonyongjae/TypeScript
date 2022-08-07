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
     function head(array:Array<any>): Array<any>[0];

     function hasIn(object:Object, key:string): boolean;
 
     function isBoolean(value:any): boolean;
 
     function toString(value:any): string;
 
     function split(string:string, separator:RegExp|string, limit:number): Array<string>;
 
     function hasPath(object:Object, path:Array<string>|string): boolean;
 
     function filter(array:[{key:string, value:string},{key:string, value:boolean}], predicate:Function): Array<string>;
     // function filter(array:[{key:string, value:string},{key:string, value:boolean}], predicate:Function): [string];
    //  function filter(array:Array<Map<Map<string,string>,Map<string,boolean>>>, predicate:Function): Array<string>;
    // function filter(array:[{key:'user', value:string},{key:'active', value:boolean}], predicate:Function): Array<string>;
    
     /**
     * Checks if `predicate` returns truthy for **all** elements of `array`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * **Note:** This method returns `true` for
     * [empty arrays](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty arrays.
     *
     * @since 5.0.0
     * @category Array
     * @param {Array} array The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * every([true, 1, null, 'yes'], Boolean)
     * // => false
     */
     function every(array:Array<any>, predicate:Function): boolean;
 
     /**
     * Creates an array of values by running each element of `array` thru `iteratee`.
     * The iteratee is invoked with three arguments: (value, index, array).
     *
     * @since 5.0.0
     * @category Array
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n
     * }
     *
     * map([4, 8], square)
     * // => [16, 64]
     */
     function map(array:Array<number>, iteratee:Function): Array<number>;
    }


// head.js: https://github.com/lodash/lodash/blob/master/head.js
// hasIn.js: https://github.com/lodash/lodash/blob/master/hasIn.js
// isBoolean.js: https://github.com/lodash/lodash/blob/master/isBoolean.js
// toString.js: https://github.com/lodash/lodash/blob/master/toString.js
// split.js: https://github.com/lodash/lodash/blob/master/split.js
// hasPath.js: https://github.com/lodash/lodash/blob/master/hasPath.js
// filter.js: https://github.com/lodash/lodash/blob/master/filter.js
// every.js: https://github.com/lodash/lodash/blob/master/every.js
// map.js: https://github.com/lodash/lodash/blob/master/map.js
