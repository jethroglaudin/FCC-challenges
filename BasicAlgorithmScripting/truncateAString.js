function truncateString(str, num) {
    // Clear out that junk in your trunk
   
        // Clear out that junk in your trunk
        
        let newStr = [];
        let testLength = str.length;
        let tempStr = str;
        let temp = "";

        if (testLength > num) {
            temp = tempStr.substr(0, num);
            temp = temp.concat("...");
            newStr.push(temp);
            
            return newStr.join();
        }

        else {
            return str
        }
       
    
}


truncateString("A-tisket a-tasket A green and yellow basket", 8);