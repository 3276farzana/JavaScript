const insert=document.getElementById('insert');
window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    <div class='color'>
    <table>
      <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Digit</th>
      </tr>
      <tr>
        <td>${e.Key===''?"space":e.Key}</td>
        <td>${e.KeyCode}</td>
        <td>${e.Digit}</td>
      </tr>
    </table>
</div>
    `
})