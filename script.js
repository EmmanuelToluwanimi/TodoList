$(document).ready(function () {
    let array_list = [];


    //function to get input values and sends it into an array
    $(document).on('click', '.btn-primary', function () {

        let inp_value = $('.inp').val();
        if (inp_value == '') {
            $('.input-group').effect('shake');
        } else {
            array_list.push(inp_value);
            // console.log(array_list);
            $('.inp').val('');
        }


        $('.clr').hide();

        store();

    })

    // function to allow additon of items with Enter button
    $(document).keypress(function (e) {
        if (e.which == 13) {
            let inp_value = $('.inp').val();
            if (inp_value == '') {
                $('.input-group').effect('shake');
            } else {
                array_list.push(inp_value);
                // console.log(array_list);
                $('.inp').val('');
            }


            $('.clr').hide();

            store();
        }
    })

    let store = () => {
        let str = JSON.stringify(array_list);
        localStorage.setItem('myArray', str);

        display();
    }

    let display = () => {
        let str = localStorage.getItem('myArray');
        str = JSON.parse(str);

        let y = '';
        for (items of str) {
            y += `<div class="todo px-3 border-bottom mt-1 pb-1 animate__animated animate__slideInLeft">
            <span class="task flex-fill ">${items}</span>
            <input type="checkbox">
            <button class="btn btn-danger far fa-trash-alt"></button>
        </div>`
        }
        array_list = str;
        // console.log(array_list);

        if (array_list.length == 0) {
            $('.clr').show();
        }
        else {
            $('.clr').hide();
        }

        $('.appr').html(y);
        clre();
    }
    display();



    //function to delete specific task in DOM and array
    $(document).on('click', '.btn-danger', function () {

        let z = $(this).closest('.todo').index();
        // console.log(z);

        array_list.splice(z, 1);
        // console.log(array_list);

        let str = localStorage.getItem('myArray');
        str = JSON.parse(str);
        str.splice(z, 1);
        str = localStorage.setItem('myArray', JSON.stringify(array_list));

        
        $(this).closest('.todo').remove();

        if ($('.appr').children().length == 0) {
            $('.clr').show();
        } else {
            $('.clr').hide();
        }
    })

    //function that mutes tasks when checked
    $(document).on('click', '[type="checkbox"]', function () {
        $(this).closest('.todo').find('.task').toggleClass('text-muted');
    })

    //function that set the array to empty and clears the task
    function clre() {
        $('.btn-warning').click(function () {
            let str = localStorage.clear();
            array_list = [];
            str = localStorage.setItem('myArray', JSON.stringify(array_list));
            str = array_list;
            $(this).closest('.div1').find('.todo').remove();
            if (array_list.length == 0) {
                $('.clr').show();
            }
            else {
                $('.clr').hide();
            }
        })
        // console.log(array_list);
    }

})
