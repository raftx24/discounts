<template>
    <div class="columns is-centered">
        <div class="column is-half-desktop">
            <enso-form class="box has-background-light raises-on-hover"
                @undo="
                    $refs.personClient.field.meta.disabled = false;
                    $refs.companyClient.field.meta.disabled = false;
                ">
                <template v-slot:company_id="{ field }">
                    <form-field :field="field"
                        ref="companyClient"
                        @input="$refs.personClient.field.meta.disabled = $event !== null"/>
                </template>
                <template v-slot:person_id="{ field }">
                    <form-field :field="field"
                        ref="personClient"
                        @input="$refs.companyClient.field.meta.disabled = $event !== null"/>
                </template>
            </enso-form>
        </div>
    </div>
</template>

<script>
import { EnsoForm, FormField } from '@enso-ui/forms/bulma';

export default {
    name: 'Create',

    components: { EnsoForm, FormField },
};
</script>
