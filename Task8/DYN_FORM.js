var formDef1=
                [
                {label:'Название сайта:',kind:'longtext',name:'sitename'},
                {label:'URL сайта:',kind:'longtext',name:'siteurl'},
                {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
                {label:'E-mail для связи:',kind:'shorttext',name:'email'},
                {label:'Рубрика каталога:',kind:'combo',name:'division',
                    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
                {label:'Размещение:',kind:'radio',name:'payment',
                    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
                {label:'Разрешить отзывы:',kind:'check',name:'votes'},
                {label:'Описание сайта:',kind:'memo',name:'description'},
                {label:'Опубликовать:',kind:'submit'},
                ];

            var formDef2=
                [
                {label:'Фамилия:',kind:'longtext',name:'lastname'},
                {label:'Имя:',kind:'longtext',name:'firstname'},
                {label:'Отчество:',kind:'longtext',name:'secondname'},
                {label:'Возраст:',kind:'number',name:'age'},
                {label:'Зарегистрироваться:',kind:'submit'},
                ];

            function DYN_FORM(form, formDef) {

                for(i = 0; i < formDef.length; i++) {
                    switch(formDef[i].kind) {
                        case "longtext":
                            var label = document.createElement("label");
                            label.setAttribute("for", "longtext_" + i);
                            label.textContent = formDef[i].label;
                            form.appendChild(label);

                            var input = document.createElement("input");
                            input.id = "longtext_" + i;
                            input.setAttribute("type", "text");
                            input.setAttribute("style", "width: 453px;");
                            input.setAttribute("name", formDef[i].name);
                            form.appendChild(input);

                            var br = document.createElement("br");
                            form.appendChild(br);
                            break;

                        case "number":
                            label = document.createElement("label");
                            label.setAttribute("for", "number_" + i);
                            label.textContent = formDef[i].label;
                            form.appendChild(label);

                            input = document.createElement("input");
                            input.id = "number_" + i;
                            input.setAttribute("type", "number");
                            input.setAttribute("style", "width: 80px;");
                            input.setAttribute("min", "0");
                            form.appendChild(input);

                            br = document.createElement("br");
                            form.appendChild(br);
                            break;

                        case "shorttext":
                            label = document.createElement("label");
                            label.setAttribute("for", "shorttext_" + i);
                            label.textContent = formDef[i].label;
                            form.appendChild(label);

                            input = document.createElement("input");
                            input.id = "shorttext_" + i;
                            input.setAttribute("type", "text");
                            input.setAttribute("style", "width: 200px;");
                            input.setAttribute("name", formDef[i].name);
                            form.appendChild(input);

                            br = document.createElement("br");
                            form.appendChild(br);
                            break;

                        case "combo":
                            label = document.createElement("label");
                            label.setAttribute("for", "combo_" + i);
                            label.textContent = formDef[i].label;
                            form.appendChild(label);

                            select = document.createElement("select");
                            select.id = "combo_" + i;
                            select.setAttribute("name", formDef[i].name); 
                            form.appendChild(select);

                            for(j = 0; j < formDef[i].variants.length; j++) {
                                option = document.createElement("option");
                                option.setAttribute("value", formDef[i].variants[j].value);
                                option.textContent = formDef[i].variants[j].text;
                                if(formDef[i].variants[j].value === 3) {
                                    option.setAttribute("selected", "");
                                }
                                select.appendChild(option);
                            }
                             
                            br = document.createElement("br");
                            form.appendChild(br);
                            break;

                        case "radio":
                            label = document.createElement("label");
                            label.setAttribute("for", "radio_" + i);
                            label.textContent = formDef[i].label;
                            form.appendChild(label);

                            for(j = 0; j < formDef[i].variants.length; j++) {
                                radio = document.createElement("input");
                                radio.setAttribute("value", formDef[i].variants[j].value);
                                radio.setAttribute("type", "radio");
                                radio.textContent = formDef[i].variants[j].text;
                                radio.setAttribute("name", formDef[i].name); 
                                radio.id = "radioBtn_" + j;
                                var labelRadio = document.createElement("label");
                                labelRadio.setAttribute("for", "radioBtn_" + j);
                                labelRadio.textContent = formDef[i].variants[j].text;
                                
                                form.appendChild(radio);
                                form.appendChild(labelRadio);
                            }

                            br = document.createElement("br");
                            form.appendChild(br);
                            break;

                        case "check":
                            label = document.createElement("label");
                            label.setAttribute("for", "check_" + i);
                            label.textContent = formDef[i].label;
                            form.appendChild(label);

                            input = document.createElement("input");
                            input.id = "check_" + i;
                            input.setAttribute("type", "checkbox");
                            input.setAttribute("name", formDef[i].name);
                            form.appendChild(input);

                            br = document.createElement("br");
                            form.appendChild(br);
                            break;

                        case "memo":
                            label = document.createElement("label");
                            label.setAttribute("for", "memo_" + i);
                            label.textContent = formDef[i].label;
                            form.appendChild(label);

                            br = document.createElement("br");
                            form.appendChild(br);

                            textArea = document.createElement("textarea");
                            textArea.setAttribute("name", formDef[i].name);
                            textArea.setAttribute("style", "width: 453px; height: 50px;");
                            form.appendChild(textArea);

                            br = document.createElement("br");
                            form.appendChild(br);
                            break;

                        case "submit":
                            var submit = document.createElement("input");
                            submit.setAttribute("type", "submit");
                            submit.setAttribute("value", formDef[i].label);
                            form.appendChild(submit);
                            
                            br = document.createElement("br");
                            form.appendChild(br);
                            break;

                        default:
                            alert("Error. Kind is not undefine!");

                    }
                }
            }
            DYN_FORM(form1, formDef1);
            DYN_FORM(form2, formDef2);