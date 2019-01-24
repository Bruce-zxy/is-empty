function isEmpty(data) {
    const type = Object.prototype.toString.call(data).slice(1, -1).split(' ').pop();
    switch (type) {
        case 'String':
            if (!data.length) return true;
            break;
        case 'Object':
            if (!Object.keys(data).length) return true;
            break;
        case 'Array':
            if (!data.length) return true;
            break;
        case 'Function':
            if (data.toString().match(/{[\S\s]*}/ig).shift().replace(/\s/ig, '') === '{}') return true;
            break;
        case 'Number':
            if (!data) return true;
            break;
        case 'Boolean':
            if (!data) return true;
            break;
        case 'Null':
            if (!data) return true;
            break;
        case 'Undefined':
            if (!data) return true;
            break;
        case 'Date':
            if (!new Date(data).getTime()) return true;
            break;
        case 'Set':
            if (!data.size) return true;
            break;
        case 'Map':
            if (!data.size) return true;
            break;
        default:
            return false;
    }
    return false;
}

module.exports = isEmpty;