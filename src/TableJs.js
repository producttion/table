import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import $ from "jquery";
import jsPDF from 'jspdf';
import './index.css';

//นำ module เข้ามาใช้
var doc = new jsPDF();
// function clickPrint() {
    //render to pdf
    $(function () {
        var specialElementHandlers = {
            '#editor': function (element,renderer) {
                return true;
            }
        };
        //คลิกเพื่อsave pdf
     $('#btnPrint').click(function () {
            //ตำแหน่งที่ต้องการsave
            doc.fromHTML($('#dvContainer').get(0), 0, 0, {
                'width': 170, 
                'elementHandlers': specialElementHandlers
            });
            doc.save('sample-file.pdf');
        });  
    }); 
// }

export default class TableJs extends Component {
    render() {
        return (
            <div>
                <div className="docs-example-btn">
                <Button color="primary" className="float-right"  id="btnPrint">บันทึกเอกสาร</Button>{' '}
                </div>
                <from>
                <div className="docs-example" id="dvContainer">
                    <Table bordered>
                        <thead>
                            <tr>
                                <th className="text-center">No.</th>
                                <th className="text-center">Data</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Product Type</th>
                                <th className="text-center">Blog No.</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="text-center">1</th>
                                <td className="text-center">a</td>
                                <td className="text-center">a</td>
                                <td className="text-center">a</td>
                                <td className="text-center">a</td>
                                <td className="text-center">a</td>
                                <td className="text-center">a</td>
                            </tr>
                           
                        </tbody>
                    </Table>
                </div>
                </from>
            </div>
            
        );
    }
}