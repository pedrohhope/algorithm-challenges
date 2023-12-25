
/**
 * 
 * @todo Fazer uma busca binária
 * @param {Array} list Source array
 * @param {number} item Search item
 * @returns {(number|null)} Number if the value is found or NULL otherwise
 * 
 */

export function binary_search(list, item) {
    let low = 0
    let high = list.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let guess = list[mid]

        if (guess === item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return null;
}

const list = Array.from({ length: 100 }, (_, i) => i + 1)


console.log(binary_search(list, 2)) // 1
console.log(binary_search(list, -1)) // null