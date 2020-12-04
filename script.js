$(document).ready(function () {
    let array_list = [];


    //function to get input values and sends it into an array
    $(document).on('click', '.btn-primary','13', function () {

        let inp_value = $('.inp').val();
        if (inp_value == '') {
            alert('Fill in gap')
        } else {
            array_list.push(inp_value);
            // console.log(array_list);
            $('.inp').val('');
        }

        let y = '';
        for (items of array_list) {
            y += `<div class="todo px-3 border-bottom mt-1 pb-1">
                <span class="task flex-fill">${items}</span>
                <input type="checkbox">
                <button class="btn btn-danger far fa-trash-alt"></button>
            </div>`
        }
        $('.appr').html(y);

        $('.clr').hide();

    })

    //function to delete specific task in DOM and array
    $(document).on('click', '.btn-danger', function () {

        let z = $(this).closest('.todo').index();
        // console.log(z);

        array_list.splice(z, 1);
        // console.log(array_list);

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
    $(document).on('click', '.btn-warning', function () {
        array_list = [];
        $(this).closest('.div1').find('.todo').remove();
        $('.clr').show();
        // console.log(array_list);

    })

})
