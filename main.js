    const students = [
      {
        name: ['신은영', '문성훈', '이다인', '김지현']
      },
      {
        name: ['김수', '정해인', '곽무현', '표다인']
      },
      {
        name: ['김유나', '이윤정', '류선우', '']
      },
      {
        name: ['김연주', '박나림', '정원진', '양진솔']
      },
      {
        name: ['손민혜', '권다혜', '이아름', '권다예']
      },
      {
        name: ['김단희', '오형석', '박정근', '']
      },
    ]

    const table = document.createElement('table');
    table.id = 'table';
    document.querySelector('section').append(table);
    const h1 = document.querySelector('h1');
    h1.innerHTML = new Date().getMonth() + 1 + '월 자리배치도';

    let html = '';
    for(var i = 0; i < students.length;i++) {
      html += '<tr>'
      for(var num in students[i].name){
        console.log(students[i].name[num]);
        if(students[i].name[num] == '신은영' || students[i].name[num] == '정해인' || students[i].name[num] == '김지현') {
          html += '<td class="accent">';
        } else { html += '<td>'; }
        html += students[i].name[num] + '</td>'
      }
      html += '</tr>';
    }
    table.innerHTML= html;
