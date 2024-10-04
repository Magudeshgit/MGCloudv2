// Size Formatter
export function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

// Alphabetical Sorter
export function alphabeticalSorter(sortabledata, type)
{
    function alphasort(a,b) {
        if (type)
        {
            if (a.filename>b.filename)
                {
                    return 1
                }
                else
                {
                    return -1
                }
        }   
        else
        {
            if (a.filename<b.filename)
                {
                    return 1
                }
                else
                {
                    return -1
                }
        }
    }
    return [...sortabledata.sort(alphasort)]
}

export function dateSorter(sortabledata, type)
{
    function datesort(a,b) {
        if (type)
        {
            if (new Date(a.date_created)>new Date(b.date_created))
            {
                return 1
            }
            else
            {
                return -1
            }
        }   
        else
        {
            if (new Date(a.date_created)<new Date(b.date_created))
            {
                return 1
            }
            else
            {
                return -1
            }
        }
    }
    return [...sortabledata.sort(datesort)]
}

export function sizeSorter(sortabledata, type)
{
    function sizesort(a,b) {
        if (type)
        {
            if (parseInt(a.filesize)>parseInt(b.filesize))
            {
                return 1
            }
            else
            {
                return -1
            }
        }   
        else
        {
            if (parseInt(a.filesize)<parseInt(b.filesize))
            {
                return 1
            }
            else
            {
                return -1
            }
        }
    }
    return [...sortabledata.sort(sizesort)]
}