    $( document ).ready( function() {
           var Offset = $( '.ani2' ).offset();
           $( window ).scroll( function() {
             if ( $( document ).scrollTop() > Offset.top ) {
               $( '.ani2' ).addClass( 'ani' );
             }
             else {
               $( '.ani2' ).removeClass( 'ani' );
             }
           });
     } );
    $( document ).ready( function() {
           var Offset = $( '.sub_main' ).offset();
           $( window ).scroll( function() {
             if ( $( document ).scrollTop() > Offset.top ) {
               $( '.sub_index' ).addClass( 'ani' );
             }
             else {
               $( '.sub_index' ).removeClass( 'ani' );
             }
           });
     } );
    $( document ).ready( function() {
           $('.topul_1').on('mouseenter', function(){
               $('.ani3').show()
           })
           $('.topul_1','ani3').on('mouseleave', function(){
               $('.ani3').hide()
           })
           $('.ani3').on('mouseleave', function(){
               $('.ani3').hide()
           })
           $('.topul_2').on('mouseenter', function(){
               $('.ani4').show()
           })
           $('.topul_2','.ani4').on('mouseleave', function(){
               $('.ani4').hide()
           })
           $('.ani4').on('mouseleave', function(){
               $('.ani4').hide()
           })
           $('.topul_3').on('mouseenter', function(){
               $('.ani5').show()
           })
           $('.topul_3','.ani5').on('mouseleave', function(){
               $('.ani5').hide()
           })
           $('.ani5').on('mouseleave', function(){
               $('.ani5').hide()
           })
           $('.topul_4').on('mouseenter', function(){
               $('.ani6').show()
           })
           $('.topul_4','.ani6').on('mouseleave', function(){
               $('.ani6').hide()
           })
           $('.ani6').on('mouseleave', function(){
               $('.ani6').hide()
           })
     } );
