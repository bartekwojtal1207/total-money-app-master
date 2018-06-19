import React, { Component } from 'react';
import ContactTitle from './ContactTitle/ContactTitle';
import Input from './ContactForm/Input';
import Label from './ContactForm/Label'

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            subtitle: 'Wypełnij, formularz, a Doradca z wybranego przez Ciebie banku skontaktuje się z Tobą i dopasuje oferte do Twoich potrzeb.',
            inputs: [
                {name: 'name', type: 'text', label: 'Imię'},
                {name: 'surname', type: 'text', label: 'Nazwisko'},
                {name: 'phone', type: 'text', label: 'Telefon'},
                {name: 'postCode', type: 'text', label: 'Kod pocztowy'}
            ],
            checkboxs: [
                {name: 'agreementConsent', type: 'checkbox', label: 'Wyrażam zgodę na przetwarzanie '},
                {name: 'ofertsConsent', type: 'checkbox', label: 'Wyrażam zgodę na przetwarzanie '},
                {name: 'contactConsent', type: 'checkbox', label: 'Wyrażam zgodę na przetwarzanieWyrażam zgodę na przetwarzanieWyrażam zgodę na przetwarzanie'},
            ]
        }
    }

    render() {
        const input = this.state.inputs.map((input, index) =>
            <div className="form-group" key={index+'form-group'}>
                <Input
                    key={index}
                    name={input.name}
                    type={input.type}
                    id={input.name}
                    classInput='form-control contact__form__input'
                >
                </Input>
                <Label key={index+'label'} classLabel={'contact__form__input_label'}>{input.label}</Label>
            </div>
        ),
            checbkox = this.state.checkboxs.map((checkbox,index) =>
                <div className="form-check" key={index+'form-check'}>
                    <Label key={index+'label'} forLabel={checkbox.name} classLabel={'form-check-label contact__form__checkbox_label'}>{checkbox.label}</Label>
                    <Input
                        key={index}
                        name={checkbox.name}
                        type={checkbox.type}
                        id={checkbox.name}
                        classInput='form-check-input'
                    >
                    </Input>
                    <span className="contact__form__check_wrapper__fake_checkbox" key={index+'span'}></span>
                </div>
        );


        return(
            <div>
                <section className="col-md-12 contact">
                    <ContactTitle subtitle={this.state.subtitle}>
                        Poznaj szczegóły oferty dla Ciebie <br />Już nawet w 10 minut !
                    </ContactTitle>

                    <form action="#" className="contact__form">
                        {input}
                        <div className="contact__form__check_wrapper">
                            {checbkox}
                        </div>
                        <button type="submit" className="btn btn-primary contact__contact_form__submit">Wyślij</button>
                    </form>

                </section>
            </div>
        )
    }
}

export default Contact;