
const projects = [
    "The National University of Architecture",
    "Modern Art Museum",
    "City Library",
    "Green Energy Tower"
];

let currentProjectIndex = 0;

document.getElementById('back-btn').addEventListener('click', function() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    document.getElementById('project-title').textContent = projects[currentProjectIndex];
});

document.getElementById('next-btn').addEventListener('click', function() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    document.getElementById('project-title').textContent = projects[currentProjectIndex];
});


//--------------------------------------------------------------------------------------------------------------------------

$(document).ready(function() {
    const projects = {
        all: [
            
            { title: 'Wildstone Infra Hotel', address: '2715 Ash Dr. San Jose, South Dakota', image: 'project1.png' },
            { title: 'Wish Stone Building', address: '2972 Westheimer Rd. Santa Ana, Illinois', image: 'project2.png' },
            { title: 'Mr. Parkinson\'s House', address: '3517 W. Gray St. Utica, Pennsylvania', image: 'project3.png' },
            { title: 'Oregano Height', address: '2464 Royal Ln. Mesa, New Jersey', image: 'project4.png' },
            { title: 'Mr. Parkinson\'s House', address: '3517 W. Gray St. Utica, Pennsylvania', image: 'project3.png' },
            { title: 'Oregano Height', address: '2464 Royal Ln. Mesa, New Jersey', image: 'project4.png' },
            { title: 'Wildstone Infra Hotel', address: '2715 Ash Dr. San Jose, South Dakota', image: 'project1.png' },
            { title: 'Wish Stone Building', address: '2972 Westheimer Rd. Santa Ana, Illinois', image: 'project2.png' },
            { title: 'Wildstone Infra Hotel', address: '2715 Ash Dr. San Jose, South Dakota', image: 'project1.png' },
            { title: 'Oregano Height', address: '2464 Royal Ln. Mesa, New Jersey', image: 'project4.png' },
            { title: 'Wish Stone Building', address: '2972 Westheimer Rd. Santa Ana, Illinois', image: 'project2.png' },
            { title: 'Mr. Parkinson\'s House', address: '3517 W. Gray St. Utica, Pennsylvania', image: 'project3.png' },
            
        ],
        commercial: [
            { title: 'Wildstone Infra Hotel', address: '2715 Ash Dr. San Jose, South Dakota', image: 'project1.png' },
            { title: 'Wish Stone Building', address: '2972 Westheimer Rd. Santa Ana, Illinois', image: 'project2.png' },
            { title: 'Wildstone Infra Hotel', address: '2715 Ash Dr. San Jose, South Dakota', image: 'project1.png' },
            { title: 'Wish Stone Building', address: '2972 Westheimer Rd. Santa Ana, Illinois', image: 'project2.png' },
            { title: 'Wildstone Infra Hotel', address: '2715 Ash Dr. San Jose, South Dakota', image: 'project1.png' },
            { title: 'Wish Stone Building', address: '2972 Westheimer Rd. Santa Ana, Illinois', image: 'project2.png' },
            { title: 'Wish Stone Building', address: '2972 Westheimer Rd. Santa Ana, Illinois', image: 'project2.png' },
            { title: 'Wildstone Infra Hotel', address: '2715 Ash Dr. San Jose, South Dakota', image: 'project1.png' },
            
        ],
        residential: [
            { title: 'Mr. Parkinson\'s House', address: '3517 W. Gray St. Utica, Pennsylvania', image: 'project3.png' },
            { title: 'Mr. Parkinson\'s House', address: '3517 W. Gray St. Utica, Pennsylvania', image: 'project3.png' },
            { title: 'Mr. Parkinson\'s House', address: '3517 W. Gray St. Utica, Pennsylvania', image: 'project3.png' },
            { title: 'Mr. Parkinson\'s House', address: '3517 W. Gray St. Utica, Pennsylvania', image: 'project3.png' },
            { title: 'Mr. Parkinson\'s House', address: '3517 W. Gray St. Utica, Pennsylvania', image: 'project3.png' },
            { title: 'Mr. Parkinson\'s House', address: '3517 W. Gray St. Utica, Pennsylvania', image: 'project3.png' },
            { title: 'Mr. Parkinson\'s House', address: '3517 W. Gray St. Utica, Pennsylvania', image: 'project3.png' },
            { title: 'Mr. Parkinson\'s House', address: '3517 W. Gray St. Utica, Pennsylvania', image: 'project3.png' },

        ],
        other: [
            { title: 'Example Other Project 1', address: '123 Example St. Example City, Example State', image: 'project4.png' },
            { title: 'Example Other Project 1', address: '123 Example St. Example City, Example State', image: 'project4.png' },
            { title: 'Example Other Project 1', address: '123 Example St. Example City, Example State', image: 'project4.png' },
            { title: 'Example Other Project 1', address: '123 Example St. Example City, Example State', image: 'project4.png' },

        ]
    };

    let currentCategory = 'all';
    let currentPage = 0;
    const itemsPerPage = 4;
    const totalDots = 5;

    function showProjects(category) {
        const projectContainer = $('#projects');
        const dotsContainer = $('.dots');
        projectContainer.empty();
        dotsContainer.empty();

        const selectedProjects = projects[category];
        const totalPages = Math.ceil(selectedProjects.length / itemsPerPage);
        const startIndex = currentPage * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, selectedProjects.length);

        for (let i = startIndex; i < endIndex; i++) {
            const project = selectedProjects[i];
            const projectHTML = `
                <div class="col-6 mb-3">
                    <div class="card cards" style="width: 384px;"height:331px;>
                        <img src="${project.image}" class="card-img-top" alt="${project.title}">
                        <div class="card-body blue-bg text-white ">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.address}</p>
                        </div>
                    </div>
                </div>
            `;
            projectContainer.append(projectHTML);
        }

        for (let i = 0; i < totalDots; i++) {
            const dotClass = i === currentPage ? 'dot active' : 'dot';
            dotsContainer.append(`<div class="${dotClass}" data-page="${i}"></div>`);
        }

        $('.dot').click(function() {
            currentPage = $(this).data('page');
            showProjects(currentCategory);
        });

        $('#prev').prop('disabled', currentPage === 0);
        $('#next').prop('disabled', currentPage === totalPages - 1);
    }

    $('.list-group-item').click(function() {
        $('.list-group-item').removeClass('active');
        $(this).addClass('active');
        currentCategory = $(this).data('category');
        currentPage = 0;
        showProjects(currentCategory);
    });

    $('#prev').click(function() {
        if (currentPage > 0) {
            currentPage--;
            showProjects(currentCategory);
        }
    });

    $('#next').click(function() {
        const selectedProjects = projects[currentCategory];
        const totalPages = Math.ceil(selectedProjects.length / itemsPerPage);
        if (currentPage < totalPages - 1) {
            currentPage++;
            showProjects(currentCategory);
        }
    });

    showProjects(currentCategory);
});

$(document).ready(function() {
    $('input[required]').addClass('required');
});

// ----------------------------------------------------------------------------------------------------------------
document.getElementById('contactForm').addEventListener('submit', function(event) {
    var form = event.target;
    var isValid = true;

    form.querySelectorAll('.required-field').forEach(function(input) {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (!isValid) {
        event.preventDefault();
    }
});


// jQuery(document).ready(function(){
//     jQuery(".form-control.required-field, .form-select.required-field").each(function(){
//         if(jQuery(this).attr('required') !== undefined && !jQuery(this).hasClass('et_pb_contact_captcha')){
//             var placeholderText = jQuery(this).attr('placeholder');
//             jQuery(this).attr('placeholder', placeholderText + ` <span style="color:red;">*</span>`);
//         }
//     });
// });



// jQuery(document).ready(function(){
//     jQuery(".form-control.required-field, .form-select.required-field").each(function(){
//         if(jQuery(this).attr('required') !== undefined && !jQuery(this).hasClass('et_pb_contact_captcha')){
//             var placeholderText = jQuery(this).attr('placeholder');
//             jQuery(this).attr('placeholder', placeholderText + ' <span style="color:red;">*</span>');
//         }
//     });
// });





