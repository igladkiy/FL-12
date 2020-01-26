const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function drawFolderStructure(structure, parentElem){
  let listFolder = document.createElement('ul');
  for(let i = 0; i<structure.length; i++){
    if(!structure[i].folder){
      drawFile(structure[i], listFolder);
    }else if(structure[i].folder){
      drawFolder(structure[i], listFolder);
    }
  }
  parentElem.appendChild(listFolder);
}

function drawFolder(folder, parentElem){
      let li = document.createElement('li');
      let folderImg = document.createElement('i');
      folderImg.className = 'material-icons';
      folderImg.textContent = 'folder';
      let nameFolder = document.createElement('span');
      nameFolder.textContent = folder.title;
      li.appendChild(folderImg);
      li.appendChild(nameFolder);
      parentElem.appendChild(li);

      let rendered = false;
      
      li.addEventListener('click', function(){
        if(rendered){
          return;
        }
        
          if (folder.children) {
            drawFolderStructure(folder.children, li);
          }else {
            drawEmptyFolder(li);
          }
        rendered = true;
      })

}

function drawFile(file, parentElem){
    let fileElem = document.createElement('li');
    let fileImg = document.createElement('i');
    fileImg.className = 'material-icons';
    fileImg.textContent = 'insert_drive_file';
    let nameFile = document.createElement('span');
    nameFile.textContent = file.title;

    fileElem.appendChild(fileImg);
    fileElem.appendChild(nameFile);
  
    parentElem.appendChild(fileElem)

}
function drawEmptyFolder(parentElem){
  let empty = document.createElement('p');
  empty.className = 'empty';
  empty.textContent = 'Folder is empty';
  parentElem.appendChild(empty);
}


drawFolderStructure(structure, rootNode);