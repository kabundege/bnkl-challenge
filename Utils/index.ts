export const dateHelper = (date: Date,opt:Intl.DateTimeFormatOptions) => {
    /**
   * @params
   *  Todo # Provide
   *  1. a date instance
   *  2. Options 
   * 
   * @returns {string}
   */
    return date.toLocaleDateString('default',opt)
  }

export  const generateId = () => {
  /**
   * @return {string}
   * used as an id
   * e.g 4yg020wn
   * * Of length 10 
   */
  const len = 10
  return Math.random().toString(36).substring(2,len+2);
}