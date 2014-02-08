## Deploy to Kirando/Nkasi

1. On ltfhc-prod.hact.net clone a copy of ltfhc-next repo
2. CD into the repo
3. git bundle create ltfhc-next.bundle initialbundle..master
4. git tag -f -a -m "Update for LTFHC deployment"  initialbundle HEAD
5. scp ltfhc-next.bundle lastmile@kirando.vpn:/home/ltfhc-deploy/bundles/