import { errorOn } from "./actions";
import { COMMENT_CREATE } from "./types"

const badWords = ['козел', 'осел'];

export function spamFilter(store){
    return function(next){
        return function(action){
            if(action.type === COMMENT_CREATE){
                const hasBadWords = badWords.some(res => action.data.text.includes(res))
                if (hasBadWords){
                    return store.dispatch(errorOn('Ты пидорас.'))
                }
            }
            return next(action);
        }
    }
}