import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AdyenManagementnotificationserviceV1 implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Adyen Managementnotificationservice V1',
                name: 'N8nDevAdyenManagementnotificationserviceV1',
                icon: { light: 'file:./adyen-managementnotificationservice-v1.svg', dark: 'file:./adyen-managementnotificationservice-v1.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Adyen webhooks notify system of Management API events.',
                defaults: { name: 'Adyen Managementnotificationservice V1' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAdyenManagementnotificationserviceV1Api',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
