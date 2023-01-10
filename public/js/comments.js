const newCommentHandler = async (event) => {
    event.preventDefault();
    const user_id = parseInt(document.querySelector('.user-id').id); //get element attribute
    const project_id = parseInt(document.querySelector('.project-id').id);
    const user_name = document.querySelector('.user-name').id;
    const message = document.querySelector('#comment-text').value.trim();
    if (message) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({message, project_id, user_id, user_name}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok){
            document.location.replace(`/project/${project_id}`);
        } else{
            alert('Failed to create comment');
        }
    }

};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);