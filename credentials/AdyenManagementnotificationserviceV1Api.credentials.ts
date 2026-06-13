import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AdyenManagementnotificationserviceV1Api implements ICredentialType {
        name = 'N8nDevAdyenManagementnotificationserviceV1Api';

        displayName = 'Adyen Managementnotificationservice V1 API';

        icon: Icon = { light: 'file:../nodes/AdyenManagementnotificationserviceV1/adyen-managementnotificationservice-v1.svg', dark: 'file:../nodes/AdyenManagementnotificationserviceV1/adyen-managementnotificationservice-v1.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://management-test.adyen.com/v1',
                        required: true,
                        placeholder: 'https://management-test.adyen.com/v1',
                        description: 'The base URL of your Adyen Managementnotificationservice V1 API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-API-Key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
