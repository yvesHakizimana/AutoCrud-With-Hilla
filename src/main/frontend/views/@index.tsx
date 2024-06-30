
import '../styles/styles.css'
import React, {useEffect, useState} from "react";

import {ContactService} from "Frontend/generated/endpoints";
import ContactModel from "Frontend/generated/com/rca/hillacrm/ContactModel";
import {AutoCrud} from "@vaadin/hilla-react-crud";


export default function ContactView(){

    return (
        <div className="p-m flex gap-m">
            <AutoCrud service={ContactService} model={ContactModel} />
        </div>
    )
}