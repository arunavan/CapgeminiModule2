<html>
   <body>   
      <script language = "javascript" type = "text/javascript">
         
            document.write("Hello World!")

	    var myVar = "global";      // Declare a global variable
            function checkscope( ) {
               var myVar = "local";    // Declare a local variable
               document.write(myVar);
            }
checkscope();
      </script>      
   </body>
</html>