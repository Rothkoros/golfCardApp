let golfResponse;
let teeType = 'pro'

function setTeeType(type) {
    teeType = type
    renderContent()
}

function getYards(type) {
    let total = 0;
    golfResponse.data.holes.forEach((hole, index) => {
        total += hole.teeBoxes.filter(teeBox => teeBox.teeType === type)[0].yards
    })
    return total;
}

function getTeeBox(type, index) {
    let foundTeeBox;
    golfResponse.data.holes[index].teeBoxes.forEach(teeBox => {
        if (teeBox.teeType === type) {
            foundTeeBox = teeBox
        }
    })
    return foundTeeBox
}

function optionsApiGet() {
    let xmlhttps = new XMLHttpRequest();
    let optionsApiGet = 'https://golf-courses-api.herokuapp.com/courses';
    let golfResponse2;
    const courseInfoBody = document.getElementById("optionsMenue");
    xmlhttps.onreadystatechange = () => {
        if (xmlhttps.readyState === 4 && xmlhttps.status === 200) {
            golfResponse2 = JSON.parse(xmlhttps.responseText);
            console.log(golfResponse2);
            courseInfoBody.insertAdjacentHTML("beforeend", `

            <select id="selectCourseMenue" onchange="apiGet(this.value)">
            <option value="${golfResponse2.courses[0].id}">${golfResponse2.courses[0].name}</option>
            <option value="${golfResponse2.courses[1].id}">${golfResponse2.courses[1].name}</option>
            <option value="${golfResponse2.courses[2].id}">${golfResponse2.courses[2].name}</option>
        </select>
     
            `)

        }


    }
    xmlhttps.open('GET', optionsApiGet, true)
    xmlhttps.send();
}
optionsApiGet();

function renderContent() {
    const prevContent = $("#courseContent")
    if (prevContent) {
        $("#courseContent").remove()
    }
    courseInfoBody.insertAdjacentHTML("beforeend", `<div id="courseContent">
    <table>
    <tr class="par">
    <td class="rowTitle, rowCell">
        <div>Par </div>
    </td>
    <td class="rowCell">
        <div id="par1">${golfResponse.data.holes[0].teeBoxes[0].par}</div>   
        </td>
   <td class="rowCell">
       <div id="par2">${golfResponse.data.holes[1].teeBoxes[0].par}</div>   
       </td>
   <td class="rowCell">
       <div id="par3"${golfResponse.data.holes[2].teeBoxes[0].par}></div>   
       </td>
   <td class="rowCell">
       <div id="par4">${golfResponse.data.holes[3].teeBoxes[0].par}</div>   
       </td>
   <td class="rowCell">
       <div id="par5">${golfResponse.data.holes[4].teeBoxes[0].par}</div>   
       </td>
   <td class="rowCell">
       <div id="par6">${golfResponse.data.holes[5].teeBoxes[0].par}</div>   
       </td>
   <td class="rowCell">
       <div id="par7">${golfResponse.data.holes[6].teeBoxes[0].par}</div>   
       </td>
   <td class="rowCell">
       <div id="par8">${golfResponse.data.holes[7].teeBoxes[0].par}</div>   
       </td>
   <td class="rowCell">
       <div id="par9">${golfResponse.data.holes[8].teeBoxes[0].par}</div>   
       </td>
   <td class="rowCell">
       <div id="inBlank"></div>
   </td>
   <td class="rowCell">
       <div id="par10">${golfResponse.data.holes[9].teeBoxes[0].par}</div>    
       </td>
    <td class="rowCell">
        <div id="par11">${golfResponse.data.holes[10].teeBoxes[0].par}</div>    
        </td>
    <td class="rowCell">
        <div id="par12">${golfResponse.data.holes[11].teeBoxes[0].par}</div>    
        </td>
    <td class="rowCell">
        <div id="par13">${golfResponse.data.holes[12].teeBoxes[0].par}</div>    
        </td>
    <td class="rowCell">
        <div id="par14">${golfResponse.data.holes[13].teeBoxes[0].par}</div>    
        </td>
    <td class="rowCell">
        <div id="par15">${golfResponse.data.holes[14].teeBoxes[0].par}</div>    
        </td>
    <td class="rowCell">
        <div id="par16">${golfResponse.data.holes[15].teeBoxes[0].par}</div>    
        </td>
    <td class="rowCell">
        <div id="par17">${golfResponse.data.holes[16].teeBoxes[0].par}</div>    
        </td>
    <td class="rowCell">
        <div id="par18">${golfResponse.data.holes[17].teeBoxes[0].par}</div>    
        </td>
    <td class="rowCell">
        <div id="totalBlank"></div>
    </td>
    <td class="rowCell">
        <div id="totalBlank"></div>
    </td>

</tr>

    <tr class="handicap">
    <td class="rowTitle, rowCell">
        <div>Handicap </div>
    </td>
    <td class="rowCell">
        <div id="handicap1">${golfResponse.data.holes[0].teeBoxes[0].hcp}
</div>        </td>
    <td class="rowCell">
        <div id="handicap2">${golfResponse.data.holes[1].teeBoxes[0].hcp}
</div>        </td>
    <td class="rowCell">
        <div id="handicap3">${golfResponse.data.holes[2].teeBoxes[0].hcp}
</div>        </td>
    <td class="rowCell">
        <div id="handicap4">${golfResponse.data.holes[3].teeBoxes[0].hcp}
</div>        </td>
    <td class="rowCell">
        <div id="handicap5">${golfResponse.data.holes[4].teeBoxes[0].hcp}
</div>        </td>
    <td class="rowCell">
        <div id="handicap6">${golfResponse.data.holes[5].teeBoxes[0].hcp}
</div>        </td>
    <td class="rowCell">
        <div id="handicap7">${golfResponse.data.holes[6].teeBoxes[0].hcp}
</div>        </td>
    <td class="rowCell">
        <div id="handicap8">${golfResponse.data.holes[7].teeBoxes[0].hcp}
</div>        </td>
    <td class="rowCell">
        <div id="handicap9">${golfResponse.data.holes[8].teeBoxes[0].hcp}
</div>        </td>
    <td class="rowCell">
        <div id="inBlank"></div>
    </td>
    <td class="rowCell">
        <div id="handicap10">${golfResponse.data.holes[9].teeBoxes[0].hcp}</div>
    </td>
    <td class="rowCell">
        <div id="handicap11">${golfResponse.data.holes[10].teeBoxes[0].hcp}</div>
    </td>
    <td class="rowCell">
        <div id="handicap12">${golfResponse.data.holes[11].teeBoxes[0].hcp}</div>
    </td>
    <td class="rowCell">
        <div id="handicap13">${golfResponse.data.holes[12].teeBoxes[0].hcp}</div>
    </td>
    <td class="rowCell">
        <div id="handicap14">${golfResponse.data.holes[13].teeBoxes[0].hcp}</div>
    </td>
    <td class="rowCell">
        <div id="handicap15">${golfResponse.data.holes[14].teeBoxes[0].hcp}</div>
    </td>
    <td class="rowCell">
        <div id="handicap16">${golfResponse.data.holes[15].teeBoxes[0].hcp}</div>
    </td>
    <td class="rowCell">
        <div id="handicap17">${golfResponse.data.holes[16].teeBoxes[0].hcp}</div>
    </td>
    <td class="rowCell">
        <div id="handicap18">${golfResponse.data.holes[17].teeBoxes[0].hcp}</div>
    </td>
    <td class="rowCell">
        <div id="outBlank"></div> 
    </td>
    <td class="rowCell">
        <div id="totalBlank"></div>
    </td>

</tr>

    <tr class="par">
    <td class="rowTitle, rowCell">
        <div>Yards </div>
    </td>
    <td class="rowCell">
        <div id="yards1">${getTeeBox(teeType, 0).yards}</div>     
        </td>
    <td class="rowCell">
        <div id="yards2">${getTeeBox(teeType, 1).yards}</div>     
        </td>
    <td class="rowCell">
        <div id="yards3"></div>     
        </td>
    <td class="rowCell">
        <div id="yards4"></div>     
        </td>
    <td class="rowCell">
        <div id="yards5"></div>     
        </td>
    <td class="rowCell">
        <div id="yards6"></div>     
        </td>
    <td class="rowCell">
        <div id="yards7"></div>     
        </td>
    <td class="rowCell">
        <div id="yards8"></div>     
        </td>
    <td class="rowCell">
        <div id="yards9"></div>     
        </td>
    <td class="rowCell">
        <div id="inBlank">
        </div>
    </td>
    <td class="rowCell">
        <div id="yards10"></div>      
        </td>
    <td class="rowCell">
        <div id="yards11"></div>      
        </td>
    <td class="rowCell">
        <div id="yards12"></div>      
        </td>
    <td class="rowCell">
        <div id="yards13"></div>      
        </td>
    <td class="rowCell">
        <div id="yards14"></div>      
        </td>
    <td class="rowCell">
        <div id="yards15"></div>      
        </td>
    <td class="rowCell">
        <div id="yards16"></div>      
        </td>
    <td class="rowCell">
        <div id="yards17"></div>      
        </td>
    <td class="rowCell">
        <div id="yards18"></div>      
        </td>
    <td class="rowCell">
        <div id="totalBlank"></div>
    </td>
    <td class="rowCell">
        <div id="totalBlank">${getYards(teeType)}</div>
    </td>

</tr>
</table>
</div>`)
}

function apiGet(id) {
    let xmlhttps = new XMLHttpRequest();
    let golfApi = `https://golf-courses-api.herokuapp.com/courses/${id}`;
    xmlhttps.onreadystatechange = () => {
        if (xmlhttps.readyState === 4 && xmlhttps.status === 200) {
            golfResponse = JSON.parse(xmlhttps.responseText);
            console.log(golfResponse);
            courseInfoBody.innerHTML = `
            <select id="selectTeeMenue" onchange="setTeeType(this.value)">
                <option value="${golfResponse.data.holes[0].teeBoxes[0].teeType}">Pro</option>
                <option value="${golfResponse.data.holes[0].teeBoxes[1].teeType}">Champion</option>
                <option value="${golfResponse.data.holes[0].teeBoxes[2].teeType}">Men</option>
                <option value="${golfResponse.data.holes[0].teeBoxes[3].teeType}">Women</option>
            </select>

            `
            renderContent()
        }
    }
    xmlhttps.open('GET', golfApi, true)
    xmlhttps.send();
}

apiGet()